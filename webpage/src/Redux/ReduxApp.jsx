import React from 'react'
import { Provider } from 'react-redux'
import Counter from './Redux/ui/PagesRedux/counter'
import { store } from './Redux/app/store'
import Amount from './Redux/ui/PagesRedux/Amount2'
import Point3 from './Redux/ui/PagesRedux/Point3'
import FormCurd from '../15.ReduxApi/ReduxApi2/ui3/ReduxPagesui/FormCurd'

export default function ReduxApp() {
  return (
    <div className='d-flex'>
        <Provider store={store} >
            <Counter/>
            <Amount/>
            <Point3/>
            {/* <FormCurd/> */}
        </Provider>

    </div>
  );
}