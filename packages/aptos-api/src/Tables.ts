/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import {
  AptosError,
  GetTableItemParams,
  MoveValue,
  TableItemRequest,
} from "@aptosis/aptos-data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client.js";

export class Tables<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Get a table item from the table identified by {table_handle} in the path and the "key" (TableItemRequest) provided in the request body. This is a POST endpoint because the "key" for requesting a specific table item (TableItemRequest) could be quite complex, as each of its fields could themselves be composed of other structs. This makes it impractical to express using query params, meaning GET isn't an option.
   *
   * @tags Tables
   * @name GetTableItem
   * @summary Get table item
   * @request POST:/tables/{table_handle}/item
   * @response `200` `MoveValue`
   * @response `400` `AptosError`
   * @response `404` `AptosError`
   * @response `500` `AptosError`
   */
  getTableItem = (
    { tableHandle, ...query }: GetTableItemParams,
    data: TableItemRequest,
    params: RequestParams = {}
  ) =>
    this.http.request<MoveValue, AptosError>({
      path: `/tables/${tableHandle}/item`,
      method: "POST",
      query: query,
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
