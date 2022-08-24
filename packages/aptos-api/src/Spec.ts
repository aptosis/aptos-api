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

import { Address } from "@aptosis/aptos-data-contracts";
import { HttpClient, RequestParams } from "./http-client.js";

export class Spec<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Provides a UI that you can use to explore the API. You can also retrieve the API directly at `/spec.yaml` and `/spec.json`.
   *
   * @tags General
   * @name Spec
   * @summary Show OpenAPI explorer
   * @request GET:/spec
   * @response `200` `Address`
   */
  spec = (params: RequestParams = {}) =>
    this.http.request<Address, any>({
      path: `/spec`,
      method: "GET",
      ...params,
    });
}
