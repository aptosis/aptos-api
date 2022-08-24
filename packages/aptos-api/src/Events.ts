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
  GetEventsByEventKeyParams,
  VersionedEvent,
} from "@aptosis/aptos-data-contracts";
import { HttpClient, RequestParams } from "./http-client.js";

export class Events<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description This endpoint allows you to get a list of events of a specific type as identified by its event key, which is a globally unique ID.
   *
   * @tags Events
   * @name GetEventsByEventKey
   * @summary Get events by event key
   * @request GET:/events/{event_key}
   * @response `200` `(VersionedEvent)[]`
   * @response `400` `AptosError`
   * @response `404` `AptosError`
   * @response `500` `AptosError`
   */
  getEventsByEventKey = (
    { eventKey, ...query }: GetEventsByEventKeyParams,
    params: RequestParams = {}
  ) =>
    this.http.request<VersionedEvent[], AptosError>({
      path: `/events/${eventKey}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
}
