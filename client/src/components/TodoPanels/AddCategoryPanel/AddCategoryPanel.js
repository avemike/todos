import React, { useEffect, useState } from 'react'

import '../panels.scss'

const AddCategoryPanel = () => {
  return (
    <div className="todo-panel-wrapper create-category">
      <div className="todo-panel">
        <section className="panel-section panel-header">
          <h2>Create new category</h2>
        </section>
      </div>
    </div>
  )
}

export default AddCategoryPanel