<template>
  <div class="starSearch">
    <TopBlock title="红人搜索"> </TopBlock>
    <div class="ym-search">
      <div class="card search-box">
        <el-form ref="searchFormRef" :model="searchForm">
          <el-row :gutter="20">
            <el-col :xs="24" :md="12" :lg="5">
              <el-form-item label="平台:" prop="platform" style="width: 100%">
                <el-radio-group v-model="searchForm.platform">
                  <el-radio-button value="bilibili"><i class="iconfont icon-bilibili"></i></el-radio-button>
                  <el-radio-button value="tiktok"><i class="iconfont icon-tiktok"></i></el-radio-button>
                  <el-radio-button value="youtube"><i class="iconfont icon-youtube"></i></el-radio-button>
                </el-radio-group>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :md="12" :lg="8">
              <el-form-item label="产品分类:" prop="categories">
                <el-cascader
                  v-model="searchForm.categories"
                  :options="options"
                  :props="casProps"
                  collapse-tags
                  collapse-tags-tooltip
                  clearable
                  style="width: 100%"
                />
              </el-form-item>
            </el-col>
            <el-col :xs="24" :md="12" :lg="11">
              <el-form-item label="关键词:" prop="keyword" style="width: 100%">
                <el-input v-model="searchForm.keyword" placeholder="请输入关键词" clearable />
              </el-form-item>
            </el-col>
            <el-col :xs="24" :md="12" :lg="24">
              <div style="display: flex; align-items: center; justify-content: right">
                <el-button type="primary" @click="onSubmit"> <i class="iconfont icon-sousuo"></i>搜索 </el-button>
                <el-button @click="resetForm(searchFormRef)"> <i class="iconfont icon-shanchu"></i>重置 </el-button>
              </div>
            </el-col>
          </el-row>
        </el-form>
      </div>
      <div class="card info-box">
        <InfoCard />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TopBlock from "@/components/TopBlock/index.vue";
import InfoCard from "./cpns/infoCard.vue";
import { FormInstance } from "element-plus";
import { ref, reactive } from "vue";

const searchFormRef = ref<FormInstance>();

const searchForm = reactive({
  platform: "bilibili",
  keyword: "",
  categories: []
});

const onSubmit = () => {
  console.log(searchForm.categories);
};

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};

// 多选且选择任意一级选项
const casProps = { multiple: true };

const options = [
  {
    value: 1,
    label: "时尚",
    children: [
      { value: 2, label: "时尚服饰" },
      { value: 3, label: "行李箱包" },
      { value: 4, label: "时尚生活" }
    ]
  },
  {
    value: 5,
    label: "美容",
    children: [
      { value: 6, label: "美容" },
      { value: 7, label: "美妆护肤" },
      { value: 8, label: "发型美甲" },
      { value: 9, label: "健康保健" }
    ]
  },
  {
    value: 10,
    label: "科技",
    children: [
      { value: 11, label: "科技" },
      { value: 12, label: "数码电器" }
    ]
  },
  {
    value: 13,
    label: "母婴",
    children: [
      { value: 14, label: "母婴用品" },
      { value: 15, label: "玩具" }
    ]
  },
  {
    value: 16,
    label: "宠物",
    children: [
      { value: 17, label: "宠物" },
      { value: 18, label: "宠物用品" }
    ]
  },
  {
    value: 19,
    label: "家居",
    children: [
      { value: 20, label: "花园园艺" },
      { value: 21, label: "家居家装" },
      { value: 22, label: "厨房用品" }
    ]
  },
  {
    value: 23,
    label: "办公",
    children: [
      { value: 24, label: "办公设备" },
      { value: 25, label: "五金工具" }
    ]
  },
  {
    value: 26,
    label: "生活方式",
    children: [
      { value: 27, label: "运动" },
      { value: 28, label: "美食" },
      { value: 29, label: "健康" },
      { value: 30, label: "旅游" },
      { value: 31, label: "运动用品" }
    ]
  },
  {
    value: 32,
    label: "汽车",
    children: [
      { value: 33, label: "汽车" },
      { value: 34, label: "汽摩配件" }
    ]
  },
  {
    value: 35,
    label: "娱乐",
    children: [
      { value: 36, label: "娱乐" },
      { value: 37, label: "电影音乐艺术" },
      { value: 38, label: "音乐乐器" },
      { value: 39, label: "工艺及DIY" }
    ]
  },
  {
    value: 40,
    label: "游戏",
    children: [{ value: 41, label: "游戏" }]
  },
  {
    value: 42,
    label: "其他",
    children: [
      { value: 43, label: "商务金融" },
      { value: 44, label: "教育" },
      { value: 45, label: "其他产品" }
    ]
  }
];
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
