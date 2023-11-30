export default function VmStatus(props){
    const excludedKeys = [
        'id',
        'vm_name',
        'vm_type',
        'path_to_selected_program',
        'name_of_selected_program',
        'vm_status',
        'list_of_allowed_functions_for_vm_type',
        'list_of_currently_allowed_functions',
        'message_what_changed_last',
    ];

    const customStatusLabels = {
        machine_is_started: 'Started',
        program_is_open: 'Program',
        program_is_compiled: 'Compiled',
        program_is_downloaded: 'Downloaded',
        connection_is_online: 'Online',
        plc_is_running: 'Running',
        enabled: 'Enabled',
    }

    const renderStatus = () => {
        if (!props.vm) {
            return null;
        }

        const statusItems = Object.entries(props.vm)
            .filter(([key]) => !excludedKeys.includes(key))
            .map(([key, value]) => (
                <div key={key} className="status-item">
                    <span>{customStatusLabels[key] || key}:</span>
                    {value ? <div className="status-light-green"></div> : null}
                </div>
            ));

        return statusItems;
    };

    return(
        <div className="status-container">
            <div>
                {renderStatus()}
            </div>
        </div>
    )
}
