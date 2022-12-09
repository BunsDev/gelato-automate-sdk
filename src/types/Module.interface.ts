/* eslint-disable @typescript-eslint/naming-convention */
import { JsResolverUserArgs } from "@gelatonetwork/js-resolver-sdk";

export enum Module {
  RESOLVER,
  TIME,
  PROXY,
  SINGLE_EXEC,
  ORESOLVER,
}

export interface ModuleData {
  modules: Module[];
  args: string[];
}

export interface ModuleArgsParams
  extends ResolverParams,
    TimeParams,
    ProxyParams,
    SingleExecParams,
    OffChainResolverParams {}

export interface ResolverParams {
  resolverAddress: string | null;
  resolverData: string | null;
}

export interface TimeParams {
  startTime: number | null;
  interval: number | null;
}

export interface ProxyParams {
  dedicatedMsgSender: boolean | null;
}
export interface SingleExecParams {
  singleExec: boolean | null;
}

export interface OffChainResolverParams {
  offChainResolverHash: string | null;
  offChainResolverArgs: { [key: string]: unknown } | null;
}
export interface JsResolverParams {
  jsResolverHash: string | null;
  jsResolverArgs: JsResolverUserArgs | null;
}
