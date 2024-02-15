import shuffle from "@/common/functions";

describe("functions.js", () => {
  it("shuffle functions.js", () => {
    let list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const result = shuffle(list);
    expect(list).toBe(result);
  });
});
