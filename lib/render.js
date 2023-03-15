import { isVText } from "./utils/type"

/**
 * 
 * @param {vdom} vdom 
 */
export default function render(vdom) {
	// 如果是文本节点，直接创建
	if(isVText(vdom)) {
		return document.createTextNode(vdom.text)
	}

	const { tag, props, children } = vdom
	const el = document.createElement(tag)
	// 给节点设置属性及其对应的值
	setProps(el, props)
	
	children.map(render).forEach(el.appendChild.bind(el))

	// 将真实 DOM 挂载到虚拟 DOM 上，方便 diff 过程中进行更细
	vdom.dom = el
	
	return el
}

/**
 * 
 * @param {Element} el 
 * @param {Object} props 
 */
export function setProps(el, props) {
	Object.entries(props).forEach(([key, val]) => {
		setProp(el, key, val)
	})
}

/**
 * 
 * @param {Element} el 
 * @param {String} key 
 * @param {String|Number} val 
 */
export function setProp(el, key, val) {
	el.setAttribute(key === 'className' ? 'class' : key, val)
}