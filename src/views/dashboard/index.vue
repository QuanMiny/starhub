<template>
  <div class="dashboard">
    <TopBlock title="数据总览" />
    <el-row :gutter="12">
      <el-col :xs="24" :sm="12" :md="8">
        <div class="gather-card mb12 bg-1">
          <div class="card-info">
            <span class="card-title">产品数据</span>
            <h2 class="card-text">20</h2>
          </div>
          <div class="card-icon">
            <i class="iconfont icon-tongji"></i>
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="12" :md="8">
        <div class="gather-card mb12 bg-2">
          <div class="card-info">
            <span class="card-title">红人数据</span>
            <h2 class="card-text">2</h2>
          </div>
          <div class="card-icon">
            <i class="iconfont icon-tongji"></i>
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="12" :md="8">
        <div class="gather-card mb12 bg-3">
          <div class="card-info">
            <span class="card-title">合作数据</span>
            <h2 class="card-text">77</h2>
          </div>
          <div class="card-icon">
            <i class="iconfont icon-tongji"></i>
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="12" :md="8">
        <div class="gather-card mb12 bg-4">
          <div class="card-info">
            <span class="card-title">上线数据</span>
            <h2 class="card-text">10</h2>
          </div>
          <div class="card-icon">
            <i class="iconfont icon-tongji"></i>
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="12" :md="8">
        <div class="gather-card mb12 bg-5">
          <div class="card-info">
            <span class="card-title">完成数据</span>
            <h2 class="card-text">1</h2>
          </div>
          <div class="card-icon">
            <i class="iconfont icon-tongji"></i>
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="12" :md="8">
        <div class="gather-card mb12 bg-6">
          <div class="card-info">
            <span class="card-title">视频数据</span>
            <h2 class="card-text">66</h2>
          </div>
          <div class="card-icon">
            <i class="iconfont icon-tongji"></i>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="12">
      <el-col :xs="24" :sm="24" :md="12">
        <div class="chart-card mb12">
          <div class="chart-title mb10">季度数据</div>
          <pieChart />
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12">
        <div class="chart-card mb12">
          <div class="chart-title mb10">流水数据</div>
          <lineChart />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import TopBlock from '@/components/TopBlock/index.vue'
import pieChart from './cpns/pieChart.vue'
import lineChart from './cpns/lineChart.vue'
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
