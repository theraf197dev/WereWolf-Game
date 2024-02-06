import { IUser } from "../../../../typings";

const isCreator = (creator: IUser, userCode: string|undefined) =>
  creator?.userCode === userCode;

export { isCreator };
