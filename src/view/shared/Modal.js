import React, { useEffect, useRef } from 'react'
import FocusTrap from 'focus-trap-react'
import noScroll from 'no-scroll';
import displace from 'react-displace';

export const Modal = (props) => {

    let dialogNode = useRef(null);
    const getApplicationNode = () => {
        if (props.getApplicationNode) return props.getApplicationNode();
        return props.applicationNode;
    };
    const addKeyDownListener = () => {
        setTimeout(() => {
            document.addEventListener('keydown', checkDocumentKeyDown);
        });
    }
    const exit = event => {
        if (props.onExit) {
            props.onExit(event);
        }
    };
    const checkDocumentKeyDown = event => {
        if (
            props.escapeExits &&
            (event.key === 'Escape' || event.key === 'Esc' || event.keyCode === 27)
        ) {
            exit(event);
        }
    };

    const checkUnderlayClick = event => {
        if (
            (dialogNode && dialogNode.contains(event.target)) ||
            // If the click is on the scrollbar we don't want to close the modal.
            event.pageX > event.target.ownerDocument.documentElement.offsetWidth ||
            event.pageY > event.target.ownerDocument.documentElement.offsetHeight
        )
            return;
        exit(event);
    };
    const removeKeyDownListener = () => {
        setTimeout(() => {
            document.removeEventListener('keydown', checkDocumentKeyDown);
        });
    }

    let style = {};
    if (props.includeDefaultStyles) {
        style = {
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 1050,
            overflowX: 'hidden',
            overflowY: 'auto',
            WebkitOverflowScrolling: 'touch',
            textAlign: '-webkit-center'
        };

        if (props.underlayColor) {
            style.background = props.underlayColor;
        }

        if (props.underlayClickExits) {
            style.cursor = 'pointer';
        }
    }

    let verticalCenterStyle = {};
    if (props.includeDefaultStyles) {
        verticalCenterStyle = {
            display: 'inline-block',
            height: '100%',
            verticalAlign: 'middle'
        };
    }

    const verticalCenterHelperProps = {
        key: 'a',
        style: verticalCenterStyle
    };

    let dialogStyle = {};
    if (props.includeDefaultStyles) {
        dialogStyle = {
            display: 'inline-block',
            top: 0,
            maxWidth: '100%',
            cursor: 'default',
            outline: props.focusDialog ? 0 : null
        };

        if (props.verticallyCenter) {
            dialogStyle.verticalAlign = 'middle';
            dialogStyle.top = 0;
        }
    }

    if (props.dialogStyle && typeof props.dialogStyle === 'object') {

        dialogStyle = { ...dialogStyle, ...props.dialogStyle }
    }

    const dialogProps = {
        key: 'b',
        ref: (ele) => { dialogNode = ele },
        role: props.alert ? 'alertdialog' : 'dialog',
        id: props.dialogId,
        className: props.dialogClass,
        style: dialogStyle
    };
    if (props.titleId) {
        dialogProps['aria-labelledby'] = props.titleId;
    } else if (props.titleText) {
        dialogProps['aria-label'] = props.titleText;
    }
    if (props.focusDialog) {
        dialogProps.tabIndex = '-1';
    }

    const childrenArray = [
        React.createElement('div', dialogProps, props.children)
    ];

    if (props.verticallyCenter) {
        childrenArray.unshift(
            React.createElement('div', verticalCenterHelperProps)
        );
    }

    const focusTrapOptions = props.focusTrapOptions || {};
    if (props.focusDialog || props.initialFocus) {
        focusTrapOptions.initialFocus = props.focusDialog
            ? `#${props.dialogId}`
            : props.initialFocus;
    }
    focusTrapOptions.escapeDeactivates = props.escapeExits;

    const underlayProps = {
        className: props.underlayClass,
        style: style
    };
    if (props.underlayClickExits) {
        underlayProps.onMouseDown = checkUnderlayClick;
    }

    useEffect(() => {

        if (!props.titleText && !props.titleId) {
            throw new Error(
                'a `titleText` or `titleId`'
            );
        } else {
            if (props.onEnter) {
                props.onEnter();
            }
            // Timeout to ensure this happens *after* focus has moved
            const applicationNode = getApplicationNode();
            setTimeout(() => {
                if (applicationNode) {
                    applicationNode.setAttribute('aria-hidden', 'true');
                }
            }, 0);
            if (props.escapeExits) {
                addKeyDownListener();
            }
            if (props.scrollDisabled) {
                noScroll.on();
            }
        }

        return () => {

            if (props.scrollDisabled) {
                noScroll.off();
            }
            const applicationNode = getApplicationNode();
            if (applicationNode) {
                applicationNode.setAttribute('aria-hidden', 'false');
            }
            removeKeyDownListener();
        }
    }, [])

    return (
        <FocusTrap>
            <div {...underlayProps} >
                {childrenArray}
            </div>
        </FocusTrap>
    )
}

Modal.defaultProps = {
    underlayProps: {},
    dialogId: 'react-aria-modal-dialog',
    underlayClickExits: true,
    escapeExits: true,
    underlayColor: 'rgba(0,0,0,0.5)',
    includeDefaultStyles: true,
    focusTrapPaused: false,
    scrollDisabled: true
}
export default displace(Modal);