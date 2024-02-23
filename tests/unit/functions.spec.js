import { shuffle, stopAllTimeout, randomElements } from "@/common/functions";

describe("functions.js", () => {
  it("shuffle functions.js", () => {
    let list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const result = shuffle(list);
    expect(list).toBe(result);
  });
  it("stopAllTimeout functions.js", () => {
    let timeOutStop = false;
    setTimeout(() => (timeOutStop = !timeOutStop), 1000);
    stopAllTimeout();
    expect(timeOutStop).toBe(false);
  });
  it("randomElements functions.js", () => {
    let list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const result = randomElements(list, 3);
    expect(result.length).toBe(3);
  });
});
