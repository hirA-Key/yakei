import { ActionTypes } from "./index";

//ユーザ情報をセット
export const setUserData = (
  account: firebase.firestore.DocumentData | undefined
) =>
  ({
    type: ActionTypes.USER_DATA,
    payload: {
      uid: account?.uid as string,
      name: account?.name as string,
      userImg: account?.user_img as string,
      imgIndex: account?.img_index as string,
    },
  } as const);

//ユーザ名の更新
export const upDateUserName = (name: string) =>
  ({
    type: ActionTypes.UPDATE_USER_NAME,
    payload: {
      name,
    },
  } as const);

//プロフィール画像の更新
export const upDateUserProfileImage = (userImg: string) =>
  ({
    type: ActionTypes.UPDATE_PROFILE_IMAGE,
    payload: {
      userImg,
    },
  } as const);

//画像URLの更新
export const upDateUserImgIndex = (imgIndex: string) =>
  ({
    type: ActionTypes.UPDATE_IMG_INDEX,
    payload: {
      imgIndex,
    },
  } as const);
