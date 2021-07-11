import Paper from "@material-ui/core/Paper"
import { makeStyles } from "@material-ui/core/styles"
import classnames from "classnames"
// @flow

import React, { memo, useEffect, useRef, useState } from "react"

import styles from "./styles"

import type { Region } from "../ImageCanvas/region-tools.js"
import IconButton from "@material-ui/core/IconButton"
import Button from "@material-ui/core/Button"
import TrashIcon from "@material-ui/icons/Delete"
import CheckIcon from "@material-ui/icons/Check"
import TextField from "@material-ui/core/TextField"
import Select from "react-select"
import CreatableSelect from "react-select/creatable"

import { asMutable } from "seamless-immutable"
import { SketchPicker } from 'react-color';

const useStyles = makeStyles(styles)

type Props = {
  region: Region,
  editing?: boolean,
  allowedClasses?: Array<string>,
  allowedTags?: Array<string>,
  cls?: string,
  tags?: Array<string>,
  onDelete: (Region) => null,
  onChange: (Region) => null,
  onClose: (Region) => null,
  onOpen: (Region) => null,
  onRegionClassAdded: () => {},
  allowComments?: boolean,

  // MY ADDITIONS
  hideRegionTagOption?: boolean,
  hideRegionClsOption?: boolean
}

export const RegionLabel = ({
  region,
  editing,
  allowedClasses,
  allowedTags,
  onDelete,
  onChange,
  onClose,
  onOpen,
  onRegionClassAdded,
  allowComments,

  // MY ADDITIONS
  hideRegionTagOption,
  hideRegionClsOption
}: Props) => {
  const classes = useStyles()
  const commentInputRef = useRef(null)
  const onCommentInputClick = (_) => {
    // The TextField wraps the <input> tag with two divs
    const commentInput = commentInputRef.current.children[0].children[0]

    if (commentInput) return commentInput.focus()
  }

  const genders = ['male', 'female', 'other']
  const [selectedColor, setSelectedColor] = useState()

  // ts
  // useEffect(() => {
  //   console.log(`[REGION LABEL]`)
  //   console.log(hideRegionTagOption)
  // }, [hideRegionTagOption])

  // useEffect(() => {
  //   console.log(`[REGION LABEL]`)
  //   console.log(region.cls)
  // }, [region])

  // useEffect(() => {
  //   console.log(`[REGION LABEL]\n=== Dropdown Options ===`)
    
  //   console.log(`Array.from(Array(120)`)
  //   console.log(Array.from(Array(120).keys()))
    
  //   console.log(`allowedClasses.map((c) => ({ value: c, label: c }))`)
  //   console.log(allowedClasses.map((c) => ({ value: c, label: c })))

  //   console.log(`Array.from(Array(120).keys()).map((a) => ({value: a, label: a}))`)
  //   console.log( Array.from(Array(120).keys()).map((a) => ({value: a, label: a})) )
  // }, [])

  // useEffect(() => {
  //   console.log(`=== SELECTED COLOR ===`)
  //   console.log(selectedColor)
  // }, [selectedColor])

  return (
    <Paper
      onClick={() => (!editing ? onOpen(region) : null)}
      className={classnames(classes.regionInfo, {
        highlighted: region.highlighted,
      })}
    >
      {!editing ? (
        <div>
          {region.cls && (
            <div className="name">
              <div
                className="circle"
                style={{ backgroundColor: region.color }}
              />
              {region.cls}
            </div>
          )}
          {region.tags && (
            <div className="tags">
              {region.tags.map((t) => (
                <div key={t} className="tag">
                  {t}
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div style={{ width: 200 }}>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div
              style={{
                display: "flex",
                backgroundColor: region.color || "#888",
                color: "#fff",
                padding: 4,
                paddingLeft: 8,
                paddingRight: 8,
                borderRadius: 4,
                fontWeight: "bold",
                textShadow: "0px 0px 5px rgba(0,0,0,0.4)",
              }}
            >
              {region.type}
            </div>
            <div style={{ flexGrow: 1 }} />
            <IconButton
              onClick={() => onDelete(region)}
              tabIndex={-1}
              style={{ width: 22, height: 22 }}
              size="small"
              variant="outlined"
            >
              <TrashIcon style={{ marginTop: -8, width: 16, height: 16 }} />
            </IconButton>
          </div>
          
          {(allowedClasses || []).length > 0 && (
            <div style={{ marginTop: 6 }}>
              <Select
                placeholder="Classification"
                onChange={(o, actionMeta) => {
                  if (actionMeta.action == "create-option") {
                    onRegionClassAdded(o.value)
                  }
                  return onChange({
                    ...(region: any),
                    cls: o.value,
                  })
                }}
                value={
                  region.cls ? { label: region.cls, value: region.cls } : null
                }
                options={asMutable(
                  allowedClasses.map((c) => ({ value: c, label: c }))
                )}
              />
            </div>
          )}

          {region.cls === 'anonymization bounty' && (
            <>
            {/* AGE PICKER */}
            <div style={{ marginTop: 4 }}>
              <CreatableSelect
                placeholder="Age"
                onChange={(o, actionMeta) => {
                  if (actionMeta.action == "create-option") {}
                  return onChange({
                    ...(region: any),
                    age: o.value,
                  })
                }}
                value={ 
                  region.age ? { label: region.age, value: region.age } : null 
                }
                options={asMutable(
                  Array.from(Array(120).keys()).map((a) => ({value: a, label: a}))
                )}
              />
            </div>

            {/* GENDER PICKER */}
            <div style={{ marginTop: 4 }}>
              <CreatableSelect
                placeholder="Gender Guesser"
                onChange={(o, actionMeta) => {
                  if (actionMeta.action == "create-option") {}
                  return onChange({
                    ...(region: any),
                    gender: o.value,
                  })
                }}
                value={
                  region.gender ? { label: region.gender, value: region.gender } : null 
                }
                options={asMutable(
                  genders.map((g) => ({value: g, label: g}))
                )}
              />
            </div>

            {/* SKIN COLOR PICKER */}
            <div style={{ marginTop: 4 }}>
              <SketchPicker
                color={selectedColor ? selectedColor : '#FFFFFF'}
                onChange={(color, event) => setSelectedColor(color.hex)}
                onChangeComplete={(color, event) => {
                  return onChange({
                    ...(region: any),
                    color: color.hex,
                  })
                }}
              />
            </div>
            </>
          )}

          {((allowedTags || []).length > 0 && !hideRegionTagOption ) && (
            <div style={{ marginTop: 4 }}>
              <Select
                onChange={(newTags) =>
                  onChange({
                    ...(region: any),
                    tags: newTags.map((t) => t.value),
                  })
                }
                placeholder="Tags"
                value={(region.tags || []).map((c) => ({ label: c, value: c }))}
                isMulti
                options={asMutable(
                  allowedTags.map((c) => ({ value: c, label: c }))
                )}
              />
            </div>
          )}

          {allowComments && (
            <TextField
              InputProps={{
                className: classes.commentBox,
              }}
              fullWidth
              multiline
              rows={3}
              ref={commentInputRef}
              onClick={onCommentInputClick}
              value={region.comment || ""}
              onChange={(event) =>
                onChange({ ...(region: any), comment: event.target.value })
              }
            />
          )}
          {onClose && (
            <div style={{ marginTop: 4, display: "flex" }}>
              <div style={{ flexGrow: 1 }} />
              <Button
                onClick={() => onClose(region)}
                size="small"
                variant="contained"
                color="primary"
              >
                <CheckIcon />
              </Button>
            </div>
          )}
        </div>
      )}
    </Paper>
  )
}

export default memo(
  RegionLabel,
  (prevProps, nextProps) =>
    prevProps.editing === nextProps.editing &&
    prevProps.region === nextProps.region
)
