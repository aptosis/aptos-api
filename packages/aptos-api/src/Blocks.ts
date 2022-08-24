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
  Block,
  GetBlockByHeightParams,
  GetBlockByVersionParams,
} from "@aptosis/aptos-data-contracts";
import { HttpClient, RequestParams } from "./http-client.js";

export class Blocks<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description This endpoint allows you to get the transactions in a block and the corresponding block information.
   *
   * @tags Blocks
   * @name GetBlockByHeight
   * @summary Get blocks by height
   * @request GET:/blocks/by_height/{block_height}
   * @response `200` `Block`
   * @response `400` `AptosError`
   * @response `404` `AptosError`
   * @response `500` `AptosError`
   */
  getBlockByHeight = (
    { blockHeight, ...query }: GetBlockByHeightParams,
    params: RequestParams = {}
  ) =>
    this.http.request<Block, AptosError>({
      path: `/blocks/by_height/${blockHeight}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description This endpoint allows you to get the transactions in a block and the corresponding block information given a version in the block.
   *
   * @tags Blocks
   * @name GetBlockByVersion
   * @summary Get blocks by version
   * @request GET:/blocks/by_version/{version}
   * @response `200` `Block`
   * @response `400` `AptosError`
   * @response `404` `AptosError`
   * @response `500` `AptosError`
   */
  getBlockByVersion = (
    { version, ...query }: GetBlockByVersionParams,
    params: RequestParams = {}
  ) =>
    this.http.request<Block, AptosError>({
      path: `/blocks/by_version/${version}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
}
