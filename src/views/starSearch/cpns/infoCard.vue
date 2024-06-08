<template>
  <el-table :data="tableData" :show-header="false">
    <el-table-column prop="userinfo" width="350">
      <template #default="scope">
        <div class="user-info">
          <div class="avatar"><el-avatar :size="60" :src="scope.row.userinfo.avatar" /></div>
          <div class="info">
            <div class="info-name mb4">{{ scope.row.userinfo.name }}</div>
            <div class="info-tags">
              <el-tag v-for="(item, index) in scope.row.userinfo.tags.slice(0, 5)" :key="index" round class="mb4 mr4">
                {{ findLabelByValue(item, categoryList) }}
              </el-tag>
              <el-tooltip v-if="scope.row.userinfo.tags.length >= 6" placement="top" effect="light">
                <template #content>
                  <!-- 这里循环生成所有标签 -->
                  <el-tag v-for="(item, index) in scope.row.userinfo.tags.slice(5)" :key="index" round class="mb4 mr4">
                    {{ findLabelByValue(item, categoryList) }}
                  </el-tag>
                </template>
                <!-- 只显示前五个加上省略号 -->
                <el-tag round class="mb4 mr4">···</el-tag>
              </el-tooltip>
            </div>
          </div>
        </div>
      </template>
    </el-table-column>
    <el-table-column prop="dataAnalysis" width="200">
      <template #default="scope">
        <div class="data-analysis">
          <p>
            <span class="">粉丝量</span>
            <span>{{ scope.row.dataAnalysis.followers }}</span>
          </p>
          <p>
            <span>平均观看量</span>
            <span>{{ scope.row.dataAnalysis.avgViews }}</span>
          </p>
          <p>
            <span>平均互动率</span>
            <span>{{ scope.row.dataAnalysis.avgEngagement + "%" }}</span>
          </p>
          <p>
            <span>商业合作数</span>
            <span>{{ scope.row.dataAnalysis.collabCount }}</span>
          </p>
        </div>
      </template>
    </el-table-column>
    <el-table-column prop="media">
      <template #default="scope">
        <div class="media">
          <div class="product-video" @click="openVideo(scope.row.media.video.videoUrl)">
            <el-image class="cover" :src="scope.row.media.video.coverImg" :fit="'cover'" />
            <i class="video-icon iconfont icon-play"></i>
          </div>
          <div class="product-picture">
            <el-image
              class="img-item"
              v-for="(item, index) in scope.row.media.pictures"
              :key="index"
              :src="item"
              :preview-src-list="scope.row.media.pictures"
              :fit="'cover'"
            />
          </div>
        </div>
      </template>
    </el-table-column>
    <el-table-column prop="operation" width="120">
      <template #default="scope">
        <el-button circle @click="handleStar(scope.row)" :type="scope.row.operation.isStar ? 'warning' : ''">
          <i class="operation-icon iconfont icon-favorites"></i>
        </el-button>
        <el-button circle @click="handleEmail(scope.row)">
          <i class="operation-icon iconfont icon-send-email"></i>
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup lang="ts">
import { UserObject } from "@/typings";

defineProps({
  tableData: {
    type: Array<UserObject>,
    default: () => [
      {
        userinfo: {
          avatar: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
          name: "xxxx",
          tags: [2, 3, 4, 6, 7, 8, 9, 11]
        },
        dataAnalysis: {
          followers: 11222,
          avgViews: 323232,
          avgEngagement: 5.46,
          collabCount: 12
        },
        media: {
          video: {
            coverImg: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
            videoUrl: "https://www.bilibili.com/video/BV1EN4y147co/"
          },
          pictures: [
            "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
            "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
            "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg"
          ]
        },
        operation: {
          isStar: true,
          isMessage: false
        }
      },
      {
        userinfo: {
          avatar: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
          name: "xxxx",
          tags: [2, 3, 4, 6, 7]
        },
        dataAnalysis: {
          followers: 11222,
          avgViews: 323232,
          avgEngagement: 5.46,
          collabCount: 12
        },
        media: {
          video: {
            coverImg: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
            videoUrl: "https://www.bilibili.com/video/BV1EN4y147co/"
          },
          pictures: [
            "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
            "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
            "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg"
          ]
        },
        operation: {
          isStar: false,
          isMessage: false
        }
      },
      {
        userinfo: {
          avatar: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
          name: "xxxx",
          tags: [2, 3]
        },
        dataAnalysis: {
          followers: 11222,
          avgViews: 323232,
          avgEngagement: 5.46,
          collabCount: 12
        },
        media: {
          video: {
            coverImg: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
            videoUrl: "https://www.bilibili.com/video/BV1EN4y147co/"
          },
          pictures: [
            "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
            "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
            "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg"
          ]
        },
        operation: {
          isStar: true,
          isMessage: false
        }
      },
      {
        userinfo: {
          avatar: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
          name: "xxxx",
          tags: [2, 3]
        },
        dataAnalysis: {
          followers: 11222,
          avgViews: 323232,
          avgEngagement: 5.46,
          collabCount: 12
        },
        media: {
          video: {
            coverImg: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
            videoUrl: "https://www.bilibili.com/video/BV1EN4y147co/"
          },
          pictures: [
            "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
            "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
            "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg"
          ]
        },
        operation: {
          isStar: false,
          isMessage: false
        }
      },
      {
        userinfo: {
          avatar: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
          name: "xxxx",
          tags: [2, 3]
        },
        dataAnalysis: {
          followers: 11222,
          avgViews: 323232,
          avgEngagement: 5.46,
          collabCount: 12
        },
        media: {
          video: {
            coverImg: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
            videoUrl: "https://www.bilibili.com/video/BV1EN4y147co/"
          },
          pictures: [
            "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
            "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
            "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg"
          ]
        },
        operation: {
          isStar: false,
          isMessage: false
        }
      },
      {
        userinfo: {
          avatar: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
          name: "xxxx",
          tags: [2, 3]
        },
        dataAnalysis: {
          followers: 11222,
          avgViews: 323232,
          avgEngagement: 5.46,
          collabCount: 12
        },
        media: {
          video: {
            coverImg: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
            videoUrl: "https://www.bilibili.com/video/BV1EN4y147co/"
          },
          pictures: [
            "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
            "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
            "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg"
          ]
        },
        operation: {
          isStar: false,
          isMessage: false
        }
      },
      {
        userinfo: {
          avatar: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
          name: "xxxx",
          tags: [2, 3]
        },
        dataAnalysis: {
          followers: 11222,
          avgViews: 323232,
          avgEngagement: 5.46,
          collabCount: 12
        },
        media: {
          video: {
            coverImg: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
            videoUrl: "https://www.bilibili.com/video/BV1EN4y147co/"
          },
          pictures: [
            "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
            "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
            "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg"
          ]
        },
        operation: {
          isStar: false,
          isMessage: false
        }
      },
      {
        userinfo: {
          avatar: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
          name: "xxxx",
          tags: [2, 3]
        },
        dataAnalysis: {
          followers: 11222,
          avgViews: 323232,
          avgEngagement: 5.46,
          collabCount: 12
        },
        media: {
          video: {
            coverImg: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
            videoUrl: "https://www.bilibili.com/video/BV1EN4y147co/"
          },
          pictures: [
            "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
            "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
            "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg"
          ]
        },
        operation: {
          isStar: false,
          isMessage: false
        }
      }
    ]
  }
});

const categoryList: Array<{
  value: number;
  label: string;
}> = [
  { value: 2, label: "时尚服饰" },
  { value: 3, label: "行李箱包" },
  { value: 4, label: "时尚生活" },
  { value: 6, label: "美容" },
  { value: 7, label: "美妆护肤" },
  { value: 8, label: "发型美甲" },
  { value: 9, label: "健康保健" },
  { value: 11, label: "科技" },
  { value: 12, label: "数码电器" },
  { value: 14, label: "母婴用品" },
  { value: 15, label: "玩具" },
  { value: 17, label: "宠物" },
  { value: 18, label: "宠物用品" },
  { value: 20, label: "花园园艺" },
  { value: 21, label: "家居家装" },
  { value: 22, label: "厨房用品" },
  { value: 24, label: "办公设备" },
  { value: 25, label: "五金工具" },
  { value: 27, label: "运动" },
  { value: 28, label: "美食" },
  { value: 29, label: "健康" },
  { value: 30, label: "旅游" },
  { value: 31, label: "运动用品" },
  { value: 33, label: "汽车" },
  { value: 34, label: "汽摩配件" },
  { value: 36, label: "娱乐" },
  { value: 37, label: "电影音乐艺术" },
  { value: 38, label: "音乐乐器" },
  { value: 39, label: "工艺及DIY" },
  { value: 41, label: "游戏" },
  { value: 43, label: "商务金融" },
  { value: 44, label: "教育" },
  { value: 45, label: "其他产品" }
];

function findLabelByValue(
  value: number,
  options: Array<{
    value: number;
    label: string;
  }>
) {
  for (const option of options) {
    if (option.value === value) {
      return option.label;
    }
  }
  return null;
}

const openVideo = (url: string) => {
  window.open(url, "_blank");
};

const handleStar = (item: any) => {
  console.log(item);
};
const handleEmail = (item: any) => {
  console.log(item);
};
</script>

<style scoped lang="scss">
.user-info {
  display: flex;
  align-items: center;
  .avatar {
    width: 70px;
  }
  .info {
    flex: 1;
    .info-name {
      font-weight: 700;
    }
    .info-tags {
      height: 66px;
    }
  }
}

.data-analysis p {
  width: 100%;
  height: 20px;
  line-height: 20px;
  display: flex;
  justify-content: space-between;
}

.media {
  display: flex;
  .product-video {
    margin-right: 8px;
    position: relative;
    cursor: pointer;
    .cover {
      height: 88px;
      border-radius: 8px;
    }
    .video-icon {
      color: #fff;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 30px;
    }
  }
  .product-picture .img-item {
    width: 88px;
    height: 88px;
    background: #fff;
    border-radius: 8px;
    border: 1px solid #fff;
  }
}

.operation {
  .operation-icon {
    font-size: 20px;
  }
}

:deep(.el-table__cell) {
  position: static !important; // 解决el-image 和 el-table冲突层级冲突问题
}
</style>
