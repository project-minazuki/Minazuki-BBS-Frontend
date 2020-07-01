import React, {FC, memo} from "react";

import '../styles/components/UserInfoCard.scss';

interface IProps {
    className: string | undefined;
}

const UserInfoCard: FC<IProps> = memo(({className}) => {

    return (
      <div id='comp-user-info-card' className={className??''}>
        <div className='container'>

        </div>
      </div>
    )
})
