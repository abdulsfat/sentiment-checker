import { getCloudinaryVideoUrl } from "./endpoints";

export const memo = [
  {
    value: "negative",
    src: getCloudinaryVideoUrl("sentiment/video/keqtlzen8yzpbznekbds.mov"),
  },
  {
    value: "neutral",
    src: getCloudinaryVideoUrl("sentiment/video/c0bcwrgrzso3zoifem6r.mov"),
  },
  {
    value: "very negative",
    src: getCloudinaryVideoUrl("sentiment/video/hxvxcp5smnkzqempldbm.mov"),
  },
  {
    value: "positive",
    src: getCloudinaryVideoUrl("sentiment/video/tt9f3rjcnxd8wbdhzqxg.mov"),
  },
];
