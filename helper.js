/**
 *  selector: {CSS: string, xpath:string}
 */
export class jsHelper {
    constructor () {
        this.IH = window.innerHeight;
        this.IW = window.innerWidth;
    }

    getElementNode(selector) {
        // Get element node through css or xpath
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
        // Scroll into view through css or xpath
        let node = this.getElementNode(selector)
        if (node) {
            node.scrollIntoView()
        }
        else { console.log("Element with given selector is not present!") }
    }

    addInnerText(selector, text) {
        // Add inner text to any node using its css or xpath
        let node = this.getElementNode(selector)
        if (node) {
            node.textContent = text
        }
        else { console.log("Element with given selector is not present!") }
    }
}