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
  AccountData,
  AptosError,
  GetAccountModuleParams,
  GetAccountModulesParams,
  GetAccountParams,
  GetAccountResourceParams,
  GetAccountResourcesParams,
  GetAccountTransactionsParams,
  GetEventsByEventHandleParams,
  MoveModuleBytecode,
  MoveResource,
  Transaction,
  VersionedEvent,
} from "@aptosis/aptos-data-contracts";
import { HttpClient, RequestParams } from "./http-client.js";

export class Accounts<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Return high level information about an account such as its sequence number.
   *
   * @tags Accounts
   * @name GetAccount
   * @summary Get account
   * @request GET:/accounts/{address}
   * @response `200` `AccountData`
   * @response `400` `AptosError`
   * @response `404` `AptosError`
   * @response `500` `AptosError`
   */
  getAccount = (
    { address, ...query }: GetAccountParams,
    params: RequestParams = {}
  ) =>
    this.http.request<AccountData, AptosError>({
      path: `/accounts/${address}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description This endpoint returns all account resources at a given address at a specific ledger version (AKA transaction version). If the ledger version is not specified in the request, the latest ledger version is used. The Aptos nodes prune account state history, via a configurable time window (link). If the requested data has been pruned, the server responds with a 404.
   *
   * @tags Accounts
   * @name GetAccountResources
   * @summary Get account resources
   * @request GET:/accounts/{address}/resources
   * @response `200` `(MoveResource)[]`
   * @response `400` `AptosError`
   * @response `404` `AptosError`
   * @response `500` `AptosError`
   */
  getAccountResources = (
    { address, ...query }: GetAccountResourcesParams,
    params: RequestParams = {}
  ) =>
    this.http.request<MoveResource[], AptosError>({
      path: `/accounts/${address}/resources`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description This endpoint returns all account modules at a given address at a specific ledger version (AKA transaction version). If the ledger version is not specified in the request, the latest ledger version is used. The Aptos nodes prune account state history, via a configurable time window (link). If the requested data has been pruned, the server responds with a 404.
   *
   * @tags Accounts
   * @name GetAccountModules
   * @summary Get account modules
   * @request GET:/accounts/{address}/modules
   * @response `200` `(MoveModuleBytecode)[]`
   * @response `400` `AptosError`
   * @response `404` `AptosError`
   * @response `500` `AptosError`
   */
  getAccountModules = (
    { address, ...query }: GetAccountModulesParams,
    params: RequestParams = {}
  ) =>
    this.http.request<MoveModuleBytecode[], AptosError>({
      path: `/accounts/${address}/modules`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description This API extracts event key from the account resource identified by the `event_handle_struct` and `field_name`, then returns events identified by the event key.
   *
   * @tags Events
   * @name GetEventsByEventHandle
   * @summary Get events by event handle
   * @request GET:/accounts/{address}/events/{event_handle}/{field_name}
   * @response `200` `(VersionedEvent)[]`
   * @response `400` `AptosError`
   * @response `404` `AptosError`
   * @response `500` `AptosError`
   */
  getEventsByEventHandle = (
    { address, eventHandle, fieldName, ...query }: GetEventsByEventHandleParams,
    params: RequestParams = {}
  ) =>
    this.http.request<VersionedEvent[], AptosError>({
      path: `/accounts/${address}/events/${eventHandle}/${fieldName}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description This endpoint returns the resource of a specific type residing at a given account at a specified ledger version (AKA transaction version). If the ledger version is not specified in the request, the latest ledger version is used. The Aptos nodes prune account state history, via a configurable time window (link). If the requested data has been pruned, the server responds with a 404.
   *
   * @tags Accounts
   * @name GetAccountResource
   * @summary Get specific account resource
   * @request GET:/accounts/{address}/resource/{resource_type}
   * @response `200` `MoveResource`
   * @response `400` `AptosError`
   * @response `404` `AptosError`
   * @response `500` `AptosError`
   */
  getAccountResource = (
    { address, resourceType, ...query }: GetAccountResourceParams,
    params: RequestParams = {}
  ) =>
    this.http.request<MoveResource, AptosError>({
      path: `/accounts/${address}/resource/${resourceType}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description This endpoint returns the module with a specific name residing at a given account at a specified ledger version (AKA transaction version). If the ledger version is not specified in the request, the latest ledger version is used. The Aptos nodes prune account state history, via a configurable time window (link). If the requested data has been pruned, the server responds with a 404.
   *
   * @tags Accounts
   * @name GetAccountModule
   * @summary Get specific account module
   * @request GET:/accounts/{address}/module/{module_name}
   * @response `200` `MoveModuleBytecode`
   * @response `400` `AptosError`
   * @response `404` `AptosError`
   * @response `500` `AptosError`
   */
  getAccountModule = (
    { address, moduleName, ...query }: GetAccountModuleParams,
    params: RequestParams = {}
  ) =>
    this.http.request<MoveModuleBytecode, AptosError>({
      path: `/accounts/${address}/module/${moduleName}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description todo
   *
   * @tags Transactions
   * @name GetAccountTransactions
   * @summary Get account transactions
   * @request GET:/accounts/{address}/transactions
   * @response `200` `(Transaction)[]`
   * @response `400` `AptosError`
   * @response `404` `AptosError`
   * @response `500` `AptosError`
   */
  getAccountTransactions = (
    { address, ...query }: GetAccountTransactionsParams,
    params: RequestParams = {}
  ) =>
    this.http.request<Transaction[], AptosError>({
      path: `/accounts/${address}/transactions`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
}
