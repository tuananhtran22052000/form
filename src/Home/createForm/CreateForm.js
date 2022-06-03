import React from 'react'
import classes from './CreateForm.module.scss'
import BasicForm from './BasicForm'
import FormMethods from './FormMethods'
import FormLayout from './FormLayout'
import FormUrl from './FormUrl'
import FormLogin from './FormLogin'

const CreateForm = ( ) => {
    return(
        <div className={classes.container}>
            <div className={classes.content}>
                <div className={classes.basicForm}>
                    <BasicForm />
                </div>
                <div className={classes.formMethods}>
                    <FormMethods />
                </div>
                <div className={classes.formLayout}>
                    <FormLayout />
                </div>
            </div>
            <div className={classes.content}>
                <div className={classes.formUrl}>
                    <FormUrl />
                </div>
                <div className={classes.formLogin}>
                    <FormLogin title={'LOGIN'} />
                </div>
            </div>
        </div>
    )
}

export default CreateForm