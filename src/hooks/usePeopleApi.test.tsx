import { renderHook } from "@testing-library/react";
import { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { usersMockApi } from "../mocks/mocksData";
import { server } from "../mocks/server";
import { setupStore } from "../store";
import { errorHandlers } from "./handlers";
import usePeopleApi from "./usePeopleApi";

describe("Given function getUsers from usePeopleApi custom hook", () => {
  describe("When the function is called", () => {
    const uiWrapper = ({ children }: PropsWithChildren): React.ReactElement => {
      const store = setupStore({ usersState: { users: usersMockApi } });

      return <Provider store={store}>{children}</Provider>;
    };
    test("Then it should recieve a list of users", async () => {
      const { result } = renderHook(() => usePeopleApi(), {
        wrapper: uiWrapper,
      });
      const { getUsers } = result.current;

      const users = await getUsers();

      expect(users).toStrictEqual(usersMockApi);
    });

    describe("When the function is called and can't get the data from the Api", () => {
      test("Then it should get an error 'can't get any user'", async () => {
        server.resetHandlers(...errorHandlers);

        const expectedError = new Error("Can't get any user");
        const { result } = renderHook(() => usePeopleApi(), {
          wrapper: uiWrapper,
        });
        const { getUsers } = result.current;

        const error = getUsers();

        expect(error).rejects.toThrowError(expectedError);
      });
    });
  });
});
