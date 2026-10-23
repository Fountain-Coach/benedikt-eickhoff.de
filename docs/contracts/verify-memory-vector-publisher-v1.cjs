#!/usr/bin/env node
"use strict";
const fs=require("node:fs"),path=require("node:path"),assert=require("node:assert/strict");
const Ajv2020=require("ajv/dist/2020").default;
const addFormats=require("ajv-formats");
const schema=JSON.parse(fs.readFileSync(process.argv[2]||path.join(__dirname,"memory-vector-publisher-v1.schema.json"),"utf8"));
const fixtures=JSON.parse(fs.readFileSync(process.argv[3]||path.join(__dirname,"fixtures/memory-vector-publisher-v1.synthetic.json"),"utf8"));
const ajv=new Ajv2020({allErrors:true,strict:true,strictRequired:false});addFormats(ajv);
const check=ajv.compile(schema);
const clone=v=>JSON.parse(JSON.stringify(v));
const byKind=new Map(fixtures.records.map(r=>[r.kind,r]));
let positives=0;
for(const record of fixtures.records){
 if(!check(record))throw Error("Invalid fixture "+record.kind+": "+JSON.stringify(check.errors));
 positives++;
}
function reject(name,kind,edit){
 const r=clone(byKind.get(kind));edit(r);
 assert.equal(check(r),false,name);
 console.log("REJECT",name);
}
reject("verified source requires SHA-256","DailySourceBundle",r=>{delete r.entries[0].sourceDigest});
reject("unexpected private path forbidden","DailySourceBundle",r=>{r.entries[0].secretLocalPath="/private/archive"});
reject("author relation requires author decision","DailySourceBundle",r=>{r.relations.push({relationId:"synthetic:bad",relationType:"author-declared",fromEntryId:r.entries[0].entryId,toEntryId:r.entries[1].entryId,evidenceIds:["synthetic:evidence"]})});
reject("invalid calendar date","DailySourceBundle",r=>{r.date="2026-19-99"});
reject("interpretation requires counterreading","MemoryVector",r=>{delete r.claims[1].counterreading});
reject("model invocation requires grant receipt","MemoryVector",r=>{r.modelInvocation={providerId:"synthetic:provider",modelId:"synthetic:model",outboundPayloadDigest:"a".repeat(64)}});
reject("private field cannot become public silently","Field",r=>{r.scope="public-preview"});
reject("selection destination must be named","EditorialSelection",r=>{r.destinationIntent="any"});
reject("approval requires rights admission","PublicationAdmission",r=>{r.rightsDecision="review-needed"});
reject("approval requires disclosure acceptance","PublicationAdmission",r=>{r.disclosureDecision="review-needed"});
reject("release requires receipts","Edition",r=>{r.releaseState="released"});
const bundle=byKind.get("DailySourceBundle"),selection=byKind.get("CreativeSourceSelection"),vector=byKind.get("MemoryVector"),field=byKind.get("Field"),editorial=byKind.get("EditorialSelection"),admission=byKind.get("PublicationAdmission"),edition=byKind.get("Edition");
const entries=new Map(bundle.entries.map(e=>[e.entryId,e]));
assert.equal(entries.size,bundle.entries.length);
assert.equal(bundle.documentId,selection.bundleId);
assert.equal(bundle.sourceIndexDigest,selection.sourceIndexDigest);
assert.equal(selection.documentId,vector.selectionId);
assert.equal(bundle.sourceIndexDigest,vector.sourceIndexDigest);
assert.equal(bundle.documentId,field.bundleId);
assert.equal(selection.documentId,field.selectionId);
assert.equal(vector.documentId,field.vectorId);
assert.equal(field.documentId,editorial.fieldId);
assert.equal(editorial.documentId,admission.selectionId);
assert.equal(editorial.documentId,edition.selectionId);
assert.equal(admission.documentId,edition.admissionId);
assert.equal(admission.candidateArtifactDigest,edition.artifactDigest);
assert.equal(admission.destinationHost,edition.destinationHost);
assert.equal(admission.canonicalPath,edition.canonicalPath);
assert.equal(bundle.relations.length,0,"co-date does not create source relation");
for(const ref of selection.selectedSourceAnchors){
 const entry=entries.get(ref.entryId);assert.ok(entry,"source selection contains unknown entry");
 if(ref.sourceDigest)assert.equal(ref.sourceDigest,entry.sourceDigest);
 if(ref.mediaOrdinal!==undefined)assert.equal(ref.mediaOrdinal,entry.mediaOrdinal);
 if(ref.textStart!==undefined&&ref.textEnd!==undefined)assert.ok(ref.textEnd>ref.textStart);
}
for(const claim of vector.claims){
 for(const ref of claim.sourceAnchors){
  const entry=entries.get(ref.entryId);assert.ok(entry,"claim anchor absent");
  if(ref.sourceDigest)assert.equal(ref.sourceDigest,entry.sourceDigest);
 }
 if(claim.attributedTo==="model")assert.ok(vector.modelInvocation?.grantReceiptId,"model claim missing operation grant");
}
for(const id of field.sourceEntryIds)assert.ok(entries.has(id));
for(const id of field.visibleMissingSourceIds)assert.equal(entries.get(id)?.availability,"missing");
assert.equal(field.copyLinkControlsRequired,true);
for(const item of editorial.orderedItems)if(item.sourceEntryId)assert.ok(entries.has(item.sourceEntryId));
assert.equal(admission.status,"approved");
assert.equal(edition.releaseState,"candidate");
console.log("ACCEPT",positives,"typed synthetic records");
console.log("INVARIANTS source selection, vector, field, admission and edition consistent");
console.log("RESULT",positives,"positive records,",11,"negative schema gates, cross-document assertions PASS");
