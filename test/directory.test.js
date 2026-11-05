import test from "node:test";
import assert from "node:assert/strict";
import {resources,filterResources,categories} from "../directory.js";
test("search is case insensitive",()=>assert.equal(filterResources(resources,{query:"CLINIC"}).length,1));
test("category filters",()=>assert.equal(filterResources(resources,{category:"Education"}).length,2));
test("accessible filter",()=>assert.ok(filterResources(resources,{accessibleOnly:true}).every(x=>x.accessible)));
test("combined filters",()=>assert.equal(filterResources(resources,{query:"Central",category:"Health",accessibleOnly:true}).length,1));
test("no matches",()=>assert.deepEqual(filterResources(resources,{query:"not found here"}),[]));
test("unique categories",()=>assert.equal(categories(resources).length,5));
