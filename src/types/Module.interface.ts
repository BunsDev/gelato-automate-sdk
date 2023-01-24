/* eslint-disable @typescript-eslint/naming-convention */

import { JsResolverUserArgs } from "./Web3FunctionSchema.interface";

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
    OffChainResolverParams,
    JsResolverParams {}

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
  offChainResolverArgsHex: string | null;
}
export interface JsResolverParams {
  jsResolverHash: string | null;
  jsResolverArgs: JsResolverUserArgs | null;
  jsResolverArgsHex: string | null;
}
