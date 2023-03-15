import { h, render } from '../lib/index'

const vdom = h('div', { 'id': 'box' }, [
	h('h1', { style: 'color: pink' }, ['I am H1']),
	h('ul', { class: 'list' }, [h('li', ['#list1']), h('li', ['#list2'])]),
	h('p', ['I am p'])
])

const $dom = render(vdom)
const $app = document.getElementById('app')
$app.appendChild($dom)