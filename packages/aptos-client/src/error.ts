import type { AptosError } from "@aptosis/aptos-api-raw";
import type { AxiosRequestConfig, AxiosResponse } from "axios";

export type AptosAPIResponse<T> = AxiosResponse<T, AptosError>;

type Request = { host?: string; path?: string };

export class RequestError<T = unknown> extends Error {
  constructor(
    readonly response: AptosAPIResponse<T>,
    readonly requestBody?: string
  ) {
    const message = response.statusText;
    const data = JSON.stringify(response.data);

    const hostAndPath = [
      (response.request as Request)?.host,
      (response.request as Request)?.path,
    ]
      .filter((e) => !!e)
      .join("");
    super(
      `${message} - ${data}${hostAndPath ? ` @ ${hostAndPath}` : ""}${
        requestBody ? ` : ${requestBody}` : ""
      }`
    );
    Object.setPrototypeOf(this, new.target.prototype); // restore prototype chain
  }
}

export type AptosClientConfig = Omit<
  AxiosRequestConfig,
  "data" | "cancelToken" | "method"
>;

export function raiseForStatus<T>(
  expectedStatus: number,
  response: AptosAPIResponse<T>,
  requestContent?: unknown
): void {
  if (response.status !== expectedStatus) {
    if (requestContent) {
      throw new RequestError(response, JSON.stringify(requestContent));
    }
    throw new RequestError(response);
  }
}
