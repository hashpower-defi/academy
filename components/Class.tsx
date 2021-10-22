interface Props {
    imgSrc: string
    title: string
    fee: string
    discountFee?: string
    hours?: string
}

import Link from 'next/link'
import Router, { useRouter } from 'next/router'

function ClassComponent(props: Props) {
    const router = useRouter()

    return (
        <div className="flex flex-col bg-black border-2 border-white">
            {/* Image */}
            <img src={props.imgSrc} alt="classImg" className="class__image" />

            <div className="flex flex-col p-8 gap-3 lg:gap-7">
                {/* Title */}
                <div className="border-b-2 border-white lg:text-xl pb-3">
                    <span>{props.title}</span>
                </div>

                {/* Text */}
                <p>{props.hours}&nbsp;</p>
                {/* {props.hours && <p>{props.hours}</p>} */}
                <div>
                    <span className={props.discountFee && 'line-through'}> {props.fee}</span>
                    <span>{props.discountFee}</span>
                </div>
                {/* Button */}
                <div>
                    {/* <Link href="https://forms.gle/2WjwVs4JGRiFoXzx5">
                        <a>Book</a>
                    </Link> */}
                    <button
                        className="bg-white text-black lg:text-lg px-6 py-2 border-2 border-black hover:bg-black hover:text-white cursor-pointer hover:border-white"
                        onClick={() => router.push('https://forms.gle/2WjwVs4JGRiFoXzx5')}
                    >
                        Book Now
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ClassComponent
