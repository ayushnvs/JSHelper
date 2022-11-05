/**
 *  selector: {CSS: string, xpath:string}
 */
export class jsHelper {
    constructor () {
        this.IW = window.innerHeight;
        this.IW = window.innerWidth;
    }

    getElementNode(selector) {
        if (selector.css) {
            let elNode = document.querySelector(selector.css)
            elNode = elNode ? elNode : null
        }
        if (selector.xpath) {
            elNode = document.evaluate(selector.xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null)
            elNode = elNode.singleNodeValue ? elNode.singleNodeValue : null
        }
        return elNode
    }

    scrollIntoView(selector)  {
        let node = this.getElementNode(selector)
        if (node) {
            node.scrollIntoView()
        }
        else { console.log("Element with given selector is not present!") }
    }

    addInnerText(selector, text) {
        let node = this.getElementNode(selector)
        if (node) {
            node.textContent = text
        }
        else { console.log("Element with given selector is not present!") }
    }
}