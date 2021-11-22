const App = {
    data() {
        return {
            // counter: 0,
            title: 'Список заметок',
            placeholderString: 'Введите название заметки',
            inputValue: '',
            notes: []
        }
    },
    methods: {
        // inputChangeHandler(event) {
        //     this.inputValue = event.target.value
        // },
        addNewNote() {
            if (!this.inputValue.trim()) return
            this.notes.push(this.inputValue)
            this.inputValue = ''
        },
        removeNote(index) {
            this.notes.splice(index, 1)
        },
        toUpperCase(item) {
            return item.toUpperCase()
        },
        // doubleCount() {
        //     console.log('doubleCount');
        //     return this.notes.length * 2
        // }
        // inputKeyPress(event) {
        //     if(event.key === 'Enter') {
        //         this.addNewNote()
        //     }
        // }
    },
    computed: {
        doubleCountComputed() {
            // console.log('doubleCountComputed');
            return this.notes.length * 2
        }
    },
    watch: {
        inputValue(val) {
            if (val.length > 10) {
                this.inputValue = ''
            }
            console.log(val);
        }
    }
}


Vue.createApp(App).mount('#app')