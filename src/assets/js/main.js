// developer mode
Vue.config.devtools = true;

// STEP 2
// https://jp.vuejs.org/v2/examples/todomvc.html
let STORAGE_KEY = 'todos-vuejs-demo'
let todoStorage = {
  fetch: function() {
    let todos = JSON.parse(
      localStorage.getItem(STORAGE_KEY) || '[]'
    )
    todos.forEach(function(todo, index) {
      todo.id = index
    })
    todoStorage.uid = todos.length
    return todos
  },
  save: function(todos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  }
}

// STEP 1
const app = new Vue({
  el: '#app',
  data: {
    todos: []
  },

  methods: {
    // アロー関数を使うとthisの値を参照できない
    doAdd: function(event, value) {
      // $refs.comment で値を取得する
      let comment = this.$refs.comment
      if (!comment.value.length) { return }
      this.todos.push({
        id: todoStorage.uid++,
        comment: comment.value,
        state: 0
      })
      comment.value = ''
    }
  },

  // ローカルストレージに保存
  watch: {
    todos: {
      // アロー関数を使うとthisの値を参照できない
      handler: function(todos) {
        todoStorage.save(todos)
      },
      deep: true
    }
  },
})