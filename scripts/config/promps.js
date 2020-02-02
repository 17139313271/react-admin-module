module.exports = {
  ciType: {
    type: "list",
    name: "type",
    message: "请选择本次提交的类型:",
    choices: [
      {
        name: "feat:新功能",
        value: "feat"
      },
      {
        name: "fix:修复bug",
        value: "fix"
      },
      {
        name: "doc:文档改变",
        value: "doc"
      },
      {
        name: "style:代码格式改变",
        value: "style"
      },
      {
        name: "refactor:某个已有功能重构",
        value: "refactor"
      },
      {
        name: "perf:性能优化",
        value: "perf"
      },
      {
        name: "test:增加测试",
        value: "test"
      },
      {
        name: "build:改变了build工具 如 grunt换成了 npm",
        value: "build"
      },
      {
        name: "revert:撤销上一次的 commit",
        value: "revert"
      }
    ]
  },
  ciScope: {
    type: "list",
    name: "scope",
    message: "请选择本次提交的影响范围:",
    choices: [
      {
        name: "all:表示影响面大 ，如修改了网络框架  会对整个程序产生影响",
        value: "all"
      },
      {
        name: "loation:表示影响小，某个小小的功能",
        value: "loation"
      },
      {
        name:
          "module:表示会影响某个模块 如登录模块、首页模块 、用户管理模块等等",
        value: "module"
      },
      {
        name: "other:其他 需要更精确的描述",
        value: "other"
      }
    ]
  },
  ciScopeMsg: {
    type: "input",
    name: "scopeMsg",
    message: "请输入本次提交的影响范围:",
    validate: function(value) {
      if (value) {
        return true;
      }
      return "文本必须输入!";
    }
  },
  ciMsg: {
    type: "input",
    name: "msg",
    message: "请输入提交文本:",
    validate: function(value) {
      if (value) {
        return true;
      }
      return "文本必须输入!";
    }
  }
};
