export enum EStatus {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

export type TStatus = {
  status: "loading" | "success" | "error";
};

export type TBaseIconProps = {
  name: string;
};
