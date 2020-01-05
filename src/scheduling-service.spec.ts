import { DataProvider } from "./data-provider";
import { SchedulingService } from "./scheduling-service";

const service = new SchedulingService();
const dataProvider = new DataProvider();

describe("sample tests", () => {
  it("should test a value", () => {
    const myValue = "myStringValue";
    expect(myValue).toBe("myStringValue");
  });

  it("should test an object", () => {
    const myObject = { id: 1, name: "foo" };
    expect(myObject).toEqual({ id: 1, name: "foo" });
  });

  it("should test an array", () => {
    const myArray = ["value1", "value2"];
    expect(myArray).toEqual(expect.arrayContaining(["value2", "value1"]));
  });
});

describe("challenge a", () => {
  //TIP: Call service.challengeA
});

describe("challenge b", () => {
  //TIP: Call service.challengeB
});

describe("challenge c", () => {
  //TIP: Call service.challengeC
});
