<template>
  <div class="question-wrap">
    <Header :order="order" />
    <div class="question-main">
      <div v-for="(question, index) in questions" :key="question.id" class="wrap wrap-text">
        <div :class="['wrap-text-content', { 'bgf': question.type === 'select' || question.type === 'multi' }]">
          <div class="wrap-text-sort">{{index + 1}}</div>
          <div class="ta-c m-w-10" v-html="question.title"></div>
          <div v-if="question.type !== 'select' && question.type !== 'multi'" class="evaluate-wrap flex flex-row">
            <div @click="scoreHandle(item.value, index)" v-for="item in evaluate" :key="item.value" class="fx-1">
              <div :class="['evaluate', 'iconfont', 'icon-xingxing', { 'active': item.value <= score[index]}]"></div>
              <div class="evaluate-text ta-c">{{item.text}}</div>
            </div>
          </div>
          <div v-if="question.type === 'select'" class="special ta-c">
            <div class="label-wrap">
              <img :src="require('@/assets/img/label.png')" alt="">
              <div class="label-text">正餐</div>
            </div>
            <div class="flex flex-row flex-wrap">
              <div
                v-for="item in question.options[questionType]"
                :key="item.key"
                :class="['handle-item', { 'active': radio === item.key }]"
                @click="radioHandle(item.key)">
                <i class="iconfont icon-dianzan"></i>
                {{item.label}}
              </div>
            </div>
          </div>
          <div v-else-if="question.type && question.type === 'multi'" class="special">
            <div class="flex flex-row flex-wrap">
              <div
                class='handle-item'
                @click="selectHandle(item.key, index)"
                v-for="item in question.options"
                :key="item.key">
                <i :class="['iconfont', {
                  'icon-xuanze1': !selector[index] || selector[index].indexOf(item.key) === -1,
                  'icon-xuanze': selector[index] && selector[index].indexOf(item.key) > -1
                }]"></i>
                {{item.label}}
              </div>
            </div>
          </div>
          <div v-else v-show="score[index] > 0" class="handle-wrap">
            <div class="handle-tips">
              {{
                (question.type === 'type' || question.type === 'select' || question.type === 'evaluate')
                ? score[index] > 2 ? '好评意见' : '差评意见'
                : ''
              }}
              <span>(可多选哦)</span>
            </div>
            <div class="flex flex-row flex-wrap">
              <template v-if="question.type && (question.type === 'type' || question.type === 'select' || question.type === 'evaluate')">
                <div
                  :class="['handle-item', { 'active': selector[index] && selector[index].indexOf(item.key) > -1}]"
                  @click="selectHandle(item.key, index)"
                  v-for="
                    item
                    in
                    question.type === 'evaluate'
                    ? evaluateType[score[index] < 3 ? 'bad' : 'good']
                    : question.options[questionType]"
                  :key="item.key">
                  <i :class="['iconfont', 'icon-dianzan', { 'contrary': score[index] < 3}]"></i>
                  {{item.label}}
                </div>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
    <a @click="finish" class="button">
      提交
    </a>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import Header from './Header.vue'
@Component({
  components: { Header }
})
export default class Question extends Vue {
  radio: string | number = ''
  score: Array<number> = [0, 0, 0, 0, 0]
  selector: Array<Array<number | string>> = []
  evaluate: Array<Object> = [
    { text: '非常差', value: 1 },
    { text: '差', value: 2 },
    { text: '一般', value: 3 },
    { text: '好', value: 4 },
    { text: '非常好', value: 5 }
  ]
  evaluateType: Object = {
    bad: [
      { key: '1', label: '颜值低' },
      { key: '2', label: '口感差' },
      { key: '3', label: '味道差' },
      { key: '4', label: '食材品质差' },
      { key: '5', label: '份量少' }
    ],
    good: [
      { key: '6', label: '颜值高' },
      { key: '7', label: '口感好' },
      { key: '8', label: '味道好' },
      { key: '9', label: '食材品质佳' },
      { key: '10', label: '份量足' }
    ]
  }
  questionType = 'zc'
  questions: Object[] = [
    {
      id: 1,
      type: 'type',
      title: '请您对我们提供的新品餐食<br />进行总体评价',
      options: {
        zc: [
          { key: '0', label: '冷荤' },
          { key: '1', label: '热食' },
          { key: '2', label: '米饭' },
          { key: '3', label: '咸菜' },
          { key: '4', label: '水果' },
          { key: '5', label: '甜品' },
          { key: '6', label: '小食品' }
        ],
        qzc: [
          { key: '7', label: '热食' },
          { key: '8', label: '米饭' },
          { key: '9', label: '咸菜' },
          { key: '10', label: '水果' },
          { key: '11', label: '甜品' }
        ],
        dxc: [
          { key: '12', label: '热食' },
          { key: '13', label: '粗粮' },
          { key: '14', label: '咸菜' },
          { key: '15', label: '水果' },
          { key: '16', label: '甜品' }
        ]
      }
    },
    {
      id: 2,
      type: 'select',
      title: '您乘坐本次航班品尝了哪一款热食',
      options: {
        zc: [
          { key: '17', label: '热食1' },
          { key: '18', label: '热食2' },
          { key: '19', label: '热食3' }
        ],
        qzc: [{ key: '20', label: '热食1' }, { key: '21', label: '热食2' }],
        dxc: [{ key: '22', label: '热食1' }, { key: '23', label: '热食2' }]
      }
    },
    {
      id: 3,
      type: 'evaluate',
      title: '请您对品尝过的热食进行评价'
    },
    {
      id: 4,
      type: 'multi',
      title: '您认为我们的餐食还需要从以下哪些方面进行改善？',
      options: [
        { key: '24', label: '餐食口味' },
        { key: '25', label: '餐食份量' },
        { key: '26', label: '餐食搭配' },
        { key: '27', label: '热食选择性' }
      ]
    }
  ]
  get order (): boolean[] {
    let arr = this.score.map(item => item > 0)
    return arr
  }
  scoreHandle (evaluateVal, questionIndex): void {
    this.score.splice(questionIndex, 1, evaluateVal)
  }
  selectHandle (selectVal, questionIndex): void {
    let arr = this.selector.concat()
    if (!arr[questionIndex]) arr[questionIndex] = []
    let index = arr[questionIndex].indexOf(selectVal)
    if (index > -1) {
      arr[questionIndex].splice(index, 1)
    } else {
      arr[questionIndex].push(selectVal)
    }
    this.selector = arr
    console.log(this.selector)
  }
  radioHandle (radioVal): void {
    this.radio = radioVal
    let arr = this.score.concat()
    arr[1] = 1
    this.score = arr
  }
  finish (): void {
    this.$router.push('/finish')
  }
}
</script>
