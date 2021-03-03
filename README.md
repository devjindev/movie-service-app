# React - To Do List
![](https://img.shields.io/badge/-HTML5-F1662B)
![](https://img.shields.io/badge/-CSS3-2FA9DC)
![](https://img.shields.io/badge/-JavaScript-E3A127)
![](https://img.shields.io/badge/-React-61DAFB)  

`React를 사용하여 제작한 Movie Service Application 입니다.`  

## ✨ Preview
![preview](https://user-images.githubusercontent.com/74370531/109858588-56a17c00-7c9f-11eb-8bb9-a905961df5f6.jpg)  

## 📖 File Description
* TodoTemplet.js : ToDoList 레이아웃 (박스)
* TodoHead.js : ToDoList 헤더 (날짜, 시간, 남은 할 일 갯수 ...)
* TodoList.js : 여러개의 ToDoItem conponent 렌더링
```js
// todos 배열 => TodoItem의 todos 배열 (렌더링)
const todoList = todos.map(({id, text, done}) => (
  <TodoItem id={id} text={text} done={done} onToggle={onToggle} onRemove={onRemove} key={id}/>
));
```
* TodoItem.js
  * onToggle : 할 일 체크 (완료)
  * text : 텍스트
  * onRemove : 할 일 삭제 (휴지통)
* TodoCreate.js : 새 할 일 등록 (폼)
  * onChange : 입력
  * onCreate, onKeypress : 확인 (버튼 / 엔터)  

## 🔧 Install
```
npm install
```  

## 🚀 Usage
```
npm start
```  

## 👤 Author
**Yujin Hong**
* Email : hongyujin0216@gmail.com
* Github : [@devjindev](https://github.com/devjindev)
* Blog : [진개발연구소](https://devjindev.tistory.com/)  

## 📝 License
MIT © Yujin Hong
