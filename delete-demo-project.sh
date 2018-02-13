sed -i -e '/import todos from/d' src/store.js
sed -i -e 's/combineReducers({ todos, router: routerReducer })/combineReducers({ router: routerReducer })/g' src/store.js

sed -i -e '/import Todos from/d' src/App.js
sed -i -e 's/<Todos [/]>/<div>Hello World<\/div>/g' src/App.js

rm -r src/pages/todos
rm -r src/pages/__snapshots__
rm src/pages/Todos.js
rm src/pages/todos.test.js
rm src/modules/todos.js
rm src/modules/todos.test.js
rm -r test/e2e/todos
rm src/images/list.png
rm delete-demo-project.sh