const supertest = require("supertest");
const server = require("./server");

describe("server.js", () => {
  describe("GET /", () => {
    it("Should return 200", () => {
      return supertest(server)
        .get("/")
        .then((res) => {
          expect(res.status).toBe(200);
        });
    });
  });
  it("should return successful API", () => {
    return supertest(server)
      .get("/")
      .then((res) => {
        expect(res.body.data).toBe("working...");
      });
  });
  describe("GET /emperors", () => {
    it("Should return the emperors status", () => {
      return supertest(server)
        .get("/emperors")
        .then((res) => {
          expect(res.status).toBe(200);
        });
    });
    it("Should return body", () => {
      return supertest(server)
        .get("/emperors")
        .then((res) => {
          expect(res.body.Data).toEqual([
            {
              id: 17,
              name: "Marcus Aurelius",
            },
          ]);
        });
    });
  });
});