import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useSettings } from "./useSettings";
import Spinner from "../../ui/Spinner";
import { useUpdateSetting } from "./useUpdateSetting";

function UpdateSettingsForm() {
	const { isLoading, settings } = useSettings();

	const { isUpdating, updateSetting } = useUpdateSetting();

	function handleUpdate(e) {
		updateSetting({ [e.target.name]: e.target.value });
	}

	if (isLoading) return <Spinner />;

	return (
		<Form>
			<FormRow label="Minimum nights/booking">
				<Input
					type="number"
					id="min-nights"
					name="minBookingLenght"
					defaultValue={settings.minBookingLenght}
					disabled={isUpdating}
					onBlur={(e) => handleUpdate(e)}
				/>
			</FormRow>
			<FormRow label="Maximum nights/booking">
				<Input
					type="number"
					id="max-nights"
					defaultValue={settings.maxBookingLenght}
					name="maxBookingLenght"
					disabled={isUpdating}
					onBlur={(e) => handleUpdate(e)}
				/>
			</FormRow>
			<FormRow label="Maximum guests/booking">
				<Input
					type="number"
					id="max-guests"
					defaultValue={settings.maxGuestsPerBookings}
					name="maxGuestsPerBookings"
					disabled={isUpdating}
					onBlur={(e) => handleUpdate(e)}
				/>
			</FormRow>
			<FormRow label="Breakfast price">
				<Input
					type="number"
					id="breakfast-price"
					defaultValue={settings.breakfastPrice}
					name="breakfastPrice"
					disabled={isUpdating}
					onBlur={(e) => handleUpdate(e)}
				/>
			</FormRow>
		</Form>
	);
}

export default UpdateSettingsForm;
