import { renderer } from 'lwc';
const { createText } = renderer;

export default function template(context) {
    let if_block = context.isTrue && ifBlock(context);
    let if_block0 = !context.isFalse && ifBlock0(context);
    return {
        create() {
            if (if_block) {
                if_block.create();
            }
            if (if_block0) {
                if_block0.create();
            }
        },
        insert(target, anchor) {
            if (if_block) {
                if_block.insert(target);
            }
            if (if_block0) {
                if_block0.insert(target);
            }
        },
        update() {
            if (context.isTrue) {
                if (if_block) {
                    if_block.update();
                } else {
                    if_block = ifBlock(context);
                    if_block.create();
                    if_block.insert(target);
                }
            }
            if (!context.isFalse) {
                if (if_block0) {
                    if_block0.update();
                } else {
                    if_block0 = ifBlock0(context);
                    if_block0.create();
                    if_block0.insert(target);
                }
            }
        }
    }
}

function ifBlock(context) {
    let text;
    return {
        create() {
            text = createText("I am true\n    ");
        },
        insert(target, anchor) {
            insert(text, target);
        },
        update() {
            
        }
    }
}

function ifBlock0(context) {
    let text;
    return {
        create() {
            text = createText("I am false\n    ");
        },
        insert(target, anchor) {
            insert(text, target);
        },
        update() {
            
        }
    }
}