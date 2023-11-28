export default function VmStatus(props){
    return(
        <div>
            <div style={{
                backgroundColor: "grey",
                color: "white",
                borderRadius: "5px",
                margin: "20px",
            }}>
                Status: {props.vm ? props.vm.vm_status : null}
            </div>
        </div>
    )
}