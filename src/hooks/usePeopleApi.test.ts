import { renderHook } from "@testing-library/react";
import { usersMock } from "../mocks/mocksData";
import usePeopleApi from "./usePeopleApi";

describe("Given function getUsers from usePeopleApi custom hook", () => {
  describe("When the function is called", () => {
    test("Then you will recieve a list of users", async () => {
      const { result } = renderHook(() => usePeopleApi());
      const { getUser } = result.current;

      const users = await getUser();

      expect(users).toStrictEqual(usersMock);
    });
  });
});
