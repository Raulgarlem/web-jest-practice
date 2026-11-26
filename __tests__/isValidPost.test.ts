 import { isValidPost } from "../src/utils/validate.js";
 
 test("devuelve true para un post válido", () => {
   const post = { title: "Título válido", content: "Contenido válido" };
   expect(isValidPost(post)).toBe(true);
 });

 test("devuelve false para un post con título vacío", () => {
   const post = { title: "", content: "Contenido válido" };
   expect(isValidPost(post)).toBe(false);
 });

 test("devuelve false para un post con contenido vacío", () => {
   const post = { title: "Título válido", content: "" };
   expect(isValidPost(post)).toBe(false);
 });

 test("devuelve false cuando el título contiene solo espacios", () => {
   const post = { title: "   ", content: "Contenido válido" };
   expect(isValidPost(post)).toBe(false);
 });

 test("devuelve false cuando el contenido contiene solo espacios", () => {
   const post = { title: "Título válido", content: "   " };
   expect(isValidPost(post)).toBe(false);
 });