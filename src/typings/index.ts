export interface product {
  id: string;
  name: string;
  img: string;
  remark: string;
  star_id: number;
  plan: string;
  hasVideo: number;
  principal: number;
  create_time: string;
}

interface Userinfo {
  avatar: string;
  name: string;
  tags: number[];
}

interface DataAnalysis {
  followers: number;
  avgViews: number;
  avgEngagement: number;
  collabCount: number;
}

interface videoObj {
  coverImg: string;
  videoUrl: string;
}

interface Media {
  video: videoObj;
  pictures: string[];
}

interface Operation {
  isStar: boolean;
  isMessage: boolean;
}

export interface UserObject {
  userinfo: Userinfo;
  dataAnalysis: DataAnalysis;
  media: Media;
  operation: Operation;
}
