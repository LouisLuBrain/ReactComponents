import React, { useState } from 'react'

import Tree from '../components/Tree'
import Card from './Card'

function TreeView(props) {

  return (
    <div className="flex-col w-full">
      <Card title="Tree" props={'onChange: {function} handle the picked date, pass a {Date} arg'}>
        <Tree
          treeObject={treeObject}
          checkable={true}
          showIcon={true}
          lined={true}
          ></Tree>
      </Card>      
    </div>
  )
}

const treeObject = [
  {
    icon: 'fa fa-file',
    label: '1', 
    checked: '', 
    id: '',
    color: 'gold',
    subTree: [
      {
        icon: 'fa fa-file',
        label: '1-1', 
        checked: '', 
        id: '',
        color: 'gold',
      },
      {
        icon: 'fa fa-file',
        label: '1-2', 
        checked: '', 
        id: '',
        color: 'gold',
        subTree: [
          {
            icon: 'fa fa-file',
            label: '1-2-1', 
            checked: '', 
            id: '',
            color: 'gold',
          },
          {
            icon: 'fa fa-file',
            label: '1-2-2', 
            checked: '', 
            id: '',
            color: 'gold',
            subTree: [
              {
                icon: 'fa fa-file',
                label: '1-2-2-1', 
                checked: '', 
                id: '',
                color: 'gold',
              },
              {
                icon: 'fa fa-file',
                label: '1-2-2-2', 
                checked: '', 
                id: '',
                color: 'gold',
              }
            ]
          }
        ]
      },
      {
        icon: 'fa fa-file',
        label: '1-3', 
        checked: '', 
        id: '',
        color: 'gold',
      }
    ]
  },
  {
    icon: 'fa fa-file',
    label: '2', 
    checked: '', 
    id: '',
    color: 'gold',
  },
  {
    icon: 'fa fa-file',
    label: '3', 
    checked: '', 
    id: '',
    color: 'gold',
  }
]
export default TreeView