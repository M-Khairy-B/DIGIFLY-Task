import React, { useState, useEffect } from 'react';
import '@wangeditor/editor/dist/css/style.css';
import dynamic from 'next/dynamic';
import { IDomEditor, IEditorConfig, IToolbarConfig } from '@wangeditor/editor';

const Editor = dynamic(
    () => import('@wangeditor/editor-for-react').then((mod) => mod.Editor),
    { ssr: false },
);
const Toolbar = dynamic(
    () => import('@wangeditor/editor-for-react').then((mod) => mod.Toolbar),
    { ssr: false },
);

type InsertFnType = (url: string, alt: string) => void;

const MyEditor: React.FC = () => {
    const [editor, setEditor] = useState<IDomEditor | null>(null);
    const [html, setHtml] = useState('');

    useEffect(() => {
        if (typeof window !== 'undefined') {
            import('@wangeditor/editor').then(({ i18nChangeLanguage }) => {
                i18nChangeLanguage('en');
            });
        }
    }, []);

    const toolbarConfig: Partial<IToolbarConfig> = {
        toolbarKeys: [
            'fontFamily',
            'bold',
            'italic',
            'underline',
            'color',
            'fontSize',
            'undo',
            'redo',
            'justifyLeft',
            'justifyCenter',
            'justifyRight',
            'bulletedList',
            'numberedList',
            'uploadImage',
        ],
    };

    const editorConfig: Partial<IEditorConfig> = {
        placeholder: 'Type here...',
        maxLength: 100,
        MENU_CONF: {
            fontFamily: {
                fontFamilyList: [
                    'Arial',
                    'Courier New',
                    'Georgia',
                    'Tahoma',
                    'Verdana',
                ],
                title: 'Select Font',
            },
            fontSize: {
                fontSizeList: [
                    '12px',
                    '14px',
                    '16px',
                    '18px',
                    '20px',
                    '24px',
                    '32px',
                ],
                title: '16px',
            },
        },
    };

    useEffect(() => {
        return () => {
            if (editor) {
                editor.destroy();
                setEditor(null);
            }
        };
    }, [editor]);

    return (
        <div className="my-2 border border-gray-300 rounded-lg shadow-sm p-2 bg-white">
            <Toolbar
                editor={editor}
                defaultConfig={toolbarConfig}
                mode="default"
            />
            <Editor
                defaultConfig={editorConfig}
                value={html}
                onCreated={setEditor}
                onChange={(editor) => setHtml(editor.getHtml())}
                mode="default"
                style={{ height: '300px', overflowY: 'auto', padding: '8px' }}
            />
        </div>
    );
};

export default MyEditor;
