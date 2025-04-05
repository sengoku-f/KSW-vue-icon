<template>
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="docx-grid-block">
      <div>
        <h3>安装</h3>
        <div class="code-block">
          <div class="code-line">
            <code>npm install ksw-vue-icon --save</code>
          </div>
          <div class="code-line">
            <span class="code-comment">or</span>
          </div>
          <div class="code-line">
            <code>yarn add ksw-vue-icon</code>
          </div>
        </div>
      </div>
      <div>
        <h3>引用</h3>
        <div class="code-block">
          <div class="code-line">
            <span class="code-comment">// 引入样式 （整个项目只需1次）</span>
          </div>
          <div class="code-line">
            <code>import 'ksw-vue-icon/styles/icon.css';</code>
          </div>
          <div class="code-line">
            <span class="code-comment">// 引用</span>
          </div>
          <div class="code-line">
            <code>import { IconName } from 'ksw-vue-icon'</code>
          </div>
          <div class="code-line">
            <span class="code-comment">// 全局引用</span>
          </div>
          <div class="code-line">
            <code>import { KswIcon } from 'ksw-vue-icon'</code>
          </div>
          <div class="code-line">
            <code>Vue.use(KswIcon)</code>
          </div>
        </div>
      </div>
      <div>
        <h3>使用</h3>
        <div class="code-block">
          <div class="code-line">
            <code>&lt;IconName :size="24" color="#333" /&gt;</code>
          </div>
          <div class="code-line">
            <span class="code-comment">// 设置 spin 为 true 使图标旋转</span>
          </div>
          <div class="code-line">
            <code
              >&lt;IconLoading :size="24" color="#333" :spin="true" /&gt;</code
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="css">
.docx-grid-block {
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  gap: 1rem;
}
.docx-grid-block div {
  flex-grow: 1;
  flex-basis: 0;
}
pre {
  width: 100%;
  padding: 20px;
  border-radius: 6px;
  color: #476391;
  background-color: #e7ecf3;
  overflow: auto;
}
.code-comment {
  color: #a0a1a7;
}
.code-line {
  margin: 8px 12px;
}
.code-block {
  background-color: rgb(242, 243, 245);
  line-height: 1.5;
  border-width: 1px;
  border-color: #dee0e3;
  border-style: solid;
  border-radius: 8px;
  font-size: 14px;
  font-family: Menlo, Monaco, Consolas, "Courier New", monospace;
  margin-top: 8px;
  margin-bottom: 8px;
  padding: 4px;
}
h3 {
  width: 100%;
  max-width: 360px;
  margin: 0 16px;
  padding: 10px 0;
}
</style>
