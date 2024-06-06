<template>
  <div class="productionManage">
    <TopBlock title="我的产品">
      <template #tool>
        <el-button type="primary">
          <i class="iconfont icon-quanjia"></i>
          新增产品
        </el-button>
      </template>
    </TopBlock>
    <div class="qm-table">
      <div class="card search-box">
        <el-form ref="searchFormRef" :inline="1" :model="searchForm">
          <el-row :gutter="20">
            <el-col :xs="24" :md="12" :lg="8">
              <el-form-item label="创建时间:" prop="date" style="width: 100%">
                <el-date-picker
                  v-model="searchForm.date"
                  type="daterange"
                  start-placeholder="起始日期"
                  end-placeholder="结束日期"
                />
              </el-form-item>
            </el-col>
            <el-col :xs="24" :md="12" :lg="8">
              <el-form-item label="产品名称:" prop="product" style="width: 100%">
                <el-input v-model="searchForm.product" placeholder="请输入" clearable />
              </el-form-item>
            </el-col>
            <el-col :xs="24" :md="12" :lg="8">
              <el-form-item label="创建账号:" prop="creator" style="width: 100%">
                <el-input v-model="searchForm.creator" placeholder="请输入" clearable />
              </el-form-item>
            </el-col>
            <el-col :xs="24" :md="12" :lg="24">
              <div style="display: flex; align-items: center; justify-content: right">
                <el-button type="primary" @click="onSubmit">
                  <i class="iconfont icon-sousuo"></i>搜索
                </el-button>
                <el-button @click="resetForm(searchFormRef)">
                  <i class="iconfont icon-shanchu"></i>重置
                </el-button>
              </div>
            </el-col>
          </el-row>
        </el-form>
      </div>
      <div class="card table-box">
        <el-table class="protable" :data="tableData" style="width: 100%">
          <el-table-column fixed prop="id" label="产品ID" width="150" />
          <el-table-column prop="name" label="产品名称" width="150" />
          <el-table-column prop="img" label="产品主图" width="150" />
          <el-table-column prop="remark" label="产品备注" width="180" />
          <el-table-column prop="plan" label="合作红人" width="120" />
          <el-table-column prop="hasVideo" label="是否上线视频" width="120" />
          <el-table-column prop="principal" label="负责人" width="120" />
          <el-table-column prop="create_time" label="创建时间" width="200" />
          <el-table-column fixed="right" label="操作" width="140">
            <template #default>
              <el-button link type="primary" size="small">详情</el-button>
              <el-button link type="primary" size="small">编辑</el-button>
              <el-button link type="primary" size="small">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
          class="pagination"
          v-model:current-page="currentPage"
          v-model:page-size="pageSize"
          :page-sizes="[10, 25, 50, 100]"
          layout="total, sizes, prev, pager, next, jumper"
          :total="100"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TopBlock from '@/components/TopBlock/index.vue'
import { product } from '@/typings'

import { FormInstance } from 'element-plus'
import { ref, reactive } from 'vue'

const searchFormRef = ref<FormInstance>()

const searchForm = reactive({
  date: '',
  product: '',
  creator: ''
})

const onSubmit = () => {
  console.log(searchForm)
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}

const tableData: product[] = [
  {
    id: '12987122',
    name: 'xxx',
    img: 'xxxxx',
    remark: '备注',
    star_id: 11,
    plan: 'xxx计划',
    hasVideo: 1,
    principal: 111,
    create_time: '2024-01-01 00:00:00'
  },
  {
    id: '12987122',
    name: 'xxx',
    img: 'xxxxx',
    remark: '备注',
    star_id: 11,
    plan: 'xxx计划',
    hasVideo: 1,
    principal: 111,
    create_time: '2024-01-01 00:00:00'
  },
  {
    id: '12987122',
    name: 'xxx',
    img: 'xxxxx',
    remark: '备注',
    star_id: 11,
    plan: 'xxx计划',
    hasVideo: 1,
    principal: 111,
    create_time: '2024-01-01 00:00:00'
  },
  {
    id: '12987122',
    name: 'xxx',
    img: 'xxxxx',
    remark: '备注',
    star_id: 11,
    plan: 'xxx计划',
    hasVideo: 1,
    principal: 111,
    create_time: '2024-01-01 00:00:00'
  },
  {
    id: '12987122',
    name: 'xxx',
    img: 'xxxxx',
    remark: '备注',
    star_id: 11,
    plan: 'xxx计划',
    hasVideo: 1,
    principal: 111,
    create_time: '2024-01-01 00:00:00'
  },
  {
    id: '12987122',
    name: 'xxx',
    img: 'xxxxx',
    remark: '备注',
    star_id: 11,
    plan: 'xxx计划',
    hasVideo: 1,
    principal: 111,
    create_time: '2024-01-01 00:00:00'
  }
]

const currentPage = ref(1)
const pageSize = ref(10)

const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)
}
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
