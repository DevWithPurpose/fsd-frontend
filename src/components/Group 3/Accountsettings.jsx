import { useState } from "react";
import { MdPublic } from "react-icons/md";

import {
  FiUser,
  FiCamera,
  FiTrash2,
  FiShield,
  FiBell,
  FiEye,
  FiMail,
  FiLock,
  FiGlobe,
  FiChevronDown,
  FiCheck,
  FiSmartphone,
  FiCalendar,
  FiUsers,
  FiAlertTriangle,
} from "react-icons/fi";

const Toggle = ({ enabled, onChange }) => (
  <button
    type="button"
    onClick={() => onChange(!enabled)}
    className={`relative inline-flex min-h-6 min-w-11 items-center rounded-full transition-colors duration-200 focus:outline-none cursor-pointer ${
      enabled ? "bg-[#1D6A63]" : "bg-[#D9E5E2]"
    }`}
  >
    <span
      className={`inline-block h-4 w-4 transform rounded-full bg-[#FFFFFF] shadow transition-transform duration-200 ${
        enabled ? "translate-x-6" : "translate-x-1"
      }`}
    />
  </button>
);

// const SectionLabel = ({ icon: Icon, title, description }) => (
//   <div className="w-48 shrink-0">
//     <div className="flex items-center gap-2 mb-1">
//       <Icon className="text-[#1D6A63]" size={16} />
//       <span className="text-sm font-semibold text-gray-800">{title}</span>
//     </div>
//     <p className="text-xs text-gray-500 leading-relaxed">{description}</p>
//   </div>
// );

const AccountSettings = () => {
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    service: false,
  });
  const [avatar, setAvatar] = useState(null);
  const [visibility, setVisibility] = useState("public");
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  return (
    <div className="bg-[#EEF5F3] py-8 px-4">
      <div className="max-w-5xl mx-auto md:p-5">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-[36px] font-normal text-[#1d6a63] tracking-[-0.9px] leading-10">
            Account Settings
          </h1>
          <div className="max-w-2xl">
            <p className="text-[#56615f] text-[16px] leading-6.5 mt-1">
              Manage your personal information, security preferences, and how
              you interact with The Commons community.
            </p>
          </div>
        </div>

        {/* Form */}
        <form className="max-w-232 flex flex-col gap-16">
          {/* Public Profile */}
          <div className="w-full flex flex-col gap-8 justify-between  md:flex-row ">
            <div className="w-[288px]">
              <h5 className="text-[20px] text-[#2A3433] font-normal leading-7">
                Public Profile
              </h5>
              <p className="text-[14px] text-[#56615FCC] font-normal leading-5">
                This information will be displayed on your community profile and
                visible to other members.
              </p>
            </div>
            <div className="bg-[#ffffff] w-full lg:w-152 p-8 rounded-xl">
              {/* Avatar */}
              <div className="flex items-start gap-8">
                <div className="relative w-24 h-24">
                  {/* Hidden file input */}
                  <input
                    type="file"
                    accept="image/png, image/jpeg"
                    className="hidden"
                    id="avatar-upload"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      if (file && file.size <= 2 * 1024 * 1024) {
                        const url = URL.createObjectURL(file);
                        setAvatar(url);
                      }
                    }}
                  />

                  {/* Avatar preview — clicking it also triggers upload */}
                  <label htmlFor="avatar-upload" className="cursor-pointer">
                    {avatar ? (
                      <img
                        src={avatar}
                        alt="Avatar"
                        className="w-24 h-24 rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-24 h-24 rounded-full bg-linear-to-br from-teal-600 to-teal-800 flex items-center justify-center text-white text-xl font-bold">
                        JW
                      </div>
                    )}
                  </label>

                  <label
                    htmlFor="avatar-upload"
                    className="absolute bottom-1 -right-1 w-7 h-7 bg-[#1D6A63] rounded-full flex items-center justify-center cursor-pointer"
                  >
                    <FiCamera size={15} className="text-white" />
                  </label>
                </div>

                <div>
                  <p className="text-[#2A3433] font-bold text-[18px] leading-7">
                    Your Avatar
                  </p>
                  <p className="text-[14px] text-[#56615F] leading-5">
                    PNG or JPG. Max 2MB.
                  </p>
                  <div className="flex flex-col md:flex-row gap-2 mt-5">
                    {/* Change photo — triggers file input */}
                    <label
                      htmlFor="avatar-upload"
                      className="w-[114.41px] h-7 flex items-center justify-center gap-1 text-[12px] bg-[#D9E5E2] font-bold leading-4 px-4 py-1.5 rounded-[9999px] cursor-pointer"
                    >
                      Change photo
                    </label>

                    {/* Remove — clears avatar state */}
                    <button
                      type="button"
                      onClick={() => {
                        setAvatar(null);
                        document.getElementById("avatar-upload").value = "";
                      }}
                      className="w-[78.45px] h-7 px-4 py-1.5 flex items-center justify-center gap-1 text-[12px] bg-[#FA746F1A] text-[#A83836] font-bold rounded-lg transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>

              {/* Username / Bio */}
              <div className="mt-10 w-full lg:w-136">
                {/* name/user */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="w-full ">
                    <label className="block text-xs font-normal  text-[#56615F] my-2 uppercase leading-4 tracking-[1.2px]">
                      Full Name
                    </label>
                    <input
                      placeholder="Jaemes Wilson"
                      className="w-full h-12 text-sm rounded-xs px-4 py-3 focus:outline-none bg-[#EEF5F3]"
                    />
                  </div>
                  <div className="w-full ">
                    <label className="block text-xs font-normal  text-[#56615F] my-2 uppercase leading-4 tracking-[1.2px]">
                      Username
                    </label>
                    <input
                      placeholder="jwilson_commons"
                      className="w-full h-12 text-sm rounded-xs px-4 py-3 focus:outline-none bg-[#EEF5F3]"
                    />
                  </div>
                </div>
                {/* bio */}
                <div className="w-full">
                  <label className="block text-xs font-normal  text-[#56615F] my-4 uppercase leading-4 tracking-[1.2px]">
                    Bio
                  </label>
                  <textarea
                    placeholder="Architect and landscape enthusiast based in the city. Always looking for ways to improve our local parks and communal spaces."
                    className="w-full h-24 text-sm rounded-xs px-4 py-3 focus:outline-none bg-[#EEF5F3] resize-none"
                  />
                  <p className="text-xs text-gray-400 mt-1 text-right">
                    Best description for you profile · 300 characters left
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Account Security */}
          <div className="w-full flex flex-col justify-between gap-8 md:flex-row">
            <div className="w-[288px]">
              <h5 className="w-full text-[20px] font-normal text-[#2A3433] leading-7">
                Account Security
              </h5>
              <p className="w-full text-[14px] text-[#56615FCC] leading-5 font-normal">
                Manage your private credentials and account-wide preferences.
              </p>
            </div>
            <div className="bg-[#ffffff] w-full  lg:w-152 rounded-xl p-8">
              <div className="w-full lg:w-136 flex flex-col gap-8 justify-between">
                {/* email verification */}
                <div className="w-full flex flex-col gap-1.5">
                  <label
                    htmlFor="email"
                    className="block text-[#56615F] font-normal text-[12px] leading-4 tracking-[1.2px] uppercase "
                  >
                    EMAIL ADDRESS
                  </label>
                  <div className="flex items-center gap-3">
                    <input
                      type="text"
                      className="w-full lg:w-111.5 h-12 px-4 py-3 bg-[#EEF5F3] rounded-xs"
                    />
                    <button
                      type="button"
                      className="w-21.75 h-12 rounded-full px-6 py-3.5 bg-[#A8F0E7] text-[14px] font-bold leading-5 text-[#045C55] cursor-pointer"
                    >
                      Verify
                    </button>
                  </div>
                </div>
                {/* Password update */}
                <div className="w-full flex flex-col gap-1.5">
                  <div>
                    <label
                      htmlFor="Password"
                      className="block text-[#56615F] font-normal text-[12px] leading-4 tracking-[1.2px] uppercase "
                    >
                      Password
                    </label>
                  </div>
                  <div className="w-full bg-[#EEF5F3] flex justify-between p-4">
                    <div className="relative w-65 flex items-center gap-1.5">
                      <FiLock className="w-6 h-6" />
                      <input
                        type="password"
                        className="w-full focus:outline-none"
                      />
                      <p className="absolute -bottom-2 left-7 text-[10px] font-normal leading-3.75 text-[#56615F]">
                        Last changed 3 months ago
                      </p>
                    </div>
                    <button
                      type="button"
                      className="w-20.5 h-7 px-4 py-1 text-[#1D6A63] text-center font-bold text-[14px] leading-5 cursor-pointer"
                    >
                      Update
                    </button>
                  </div>
                </div>
                {/* Laguage and region */}
                <div className="w-full flex flex-col gap-1.5">
                  <div>
                    <label
                      htmlFor="language"
                      className="block text-[#56615F] font-normal text-[12px] leading-4 tracking-[1.2px] uppercase "
                    >
                      Language & Region
                    </label>
                  </div>
                  <div className="w-full h-12 bg-[#EEF5F3]">
                    <select className="w-full h-full text-sm rounded-lg px-2 focus:outline-none py-3 ">
                      <option>English (United States)</option>
                      <option>English (United Kingdom)</option>
                      <option>French</option>
                      <option>Spanish</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Notifications */}
          <div className="wn-full flex flex-col gap-8 justify-between md:flex-row">
            <div className="w-[288px]">
              <h5 className="text-[20px] text-[#2A3433] font-normal leading-7">
                Notifications
              </h5>
              <p className="text-[14px] text-[#56615FCC] font-normal leading-5">
                Choose how you want to be notified about updates and new
                community requests.
              </p>
            </div>
            <div className="bg-[#ffffff] w-full  lg:w-152 rounded-xl p-8">
              <div className="w-full lg:w-136 flex flex-col gap-8 justify-between">
                {[
                  {
                    key: "email",

                    title: "Email Notifications",
                    desc: "Weekly digest and urgent community alerts.",
                  },
                  {
                    key: "push",

                    title: "Push Notifications",
                    desc: "Real-time alerts for local service updates.",
                  },
                  {
                    key: "service",

                    title: "Service Reminders",
                    desc: "Reminders for scheduled services and bookings.",
                  },
                ].map(({ key, icon: Icon, title, desc }) => (
                  <div
                    key={key}
                    className="flex items-start justify-between px-6 py-4"
                  >
                    <div className="flex items-start gap-3">
                      <div>
                        <p className="text-[16px] text-[#2A3433] font-bold leading-6 ">
                          {title}
                        </p>
                        <p className="text-[14px] text-[#56615F] font-normal leading-5 ">
                          {desc}
                        </p>
                      </div>
                    </div>
                    <Toggle
                      enabled={notifications[key]}
                      onChange={(val) =>
                        setNotifications((prev) => ({ ...prev, [key]: val }))
                      }
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Privacy & Visibility */}

          <div className="w-full flex flex-col gap-8 justify-between md:flex-row">
            <div className="w-[288px]">
              <h5 className="text-[20px] text-[#2A3433] font-normal leading-7">
                Privacy & Visibility
              </h5>
              <p className="text-[14px] text-[#56615FCC] font-normal le.ading-5">
                Control who can see your activity and profile details.
              </p>
            </div>
            <div className="bg-[#ffffff] w-full  lg:w-152 rounded-xl p-8">
              <div className="w-full lg:w-136 flex flex-col gap-8 justify-between">
                <div className="w-full flex flex-col gap-4 items-start">
                  <p className="text-[12px] font-normal text-[#56615F] uppercase tracking-[1.2px] leading-4 ">
                    Profile Visibility
                  </p>
                  <div className="w-full flex flex-col gap-3">
                    {[
                      {
                        key: "public",
                        icon: MdPublic,
                        label: "Public",
                        desc: "Everyone on The Commons can view your profile.",
                      },
                      {
                        key: "community",
                        icon: FiUsers,
                        label: "Community Only",
                        desc: "Only verified members can view your profile details.",
                      },
                    ].map(({ key, icon: Icon, label, desc }) => (
                      <button
                        type="button"
                        key={key}
                        onClick={() => setVisibility(key)}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl border transition-all cursor-pointer ${
                          visibility === key
                            ? "border-[#1D6A63] bg-[#EEF5F3]"
                            : "border-[#A9B4B233] bg-[#A9B4B233]"
                        }`}
                      >
                        <div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                            visibility === key
                              ? "bg-[#1D6A63]/15"
                              : "bg-gray-100"
                          }`}
                        >
                          <Icon
                            size={20}
                            className={
                              visibility === key
                                ? "text-[#1D6A63]"
                                : "text-[#56615F]"
                            }
                          />
                        </div>
                        <div className="flex-1 text-left">
                          <p
                            className={`text-[14px] font-normal leading-5 ${visibility === key ? "text-[#2A3433]" : "text-[#2A3433]"}`}
                          >
                            {label}
                          </p>
                          <p className="text-[12px] font-normal leading-4 text-[#56615F]">
                            {desc}
                          </p>
                        </div>
                        {visibility === key && (
                          <div className="w-5 h-5 rounded-full bg-[#1D6A63] flex items-center justify-center">
                            <FiCheck size={11} className="text-white" />
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Delete Account */}
                <div className="mt-6 p-4 rounded-xl border border-[#FA746F33] bg-[#FA746F0D]">
                  <div className="flex items-start gap-3 mb-3">
                    <div>
                      <p className="text-[16px] leading-6 font-normal text-[#A83836]">
                        Delete Account
                      </p>
                      <p className="text-[14px] font-normal leading-5 text-[#56615F] mt-0.5">
                        Permanently remove your account and all associated data.
                        This action is irreversible.
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowDeleteConfirm(true)}
                    className="w-[174.42px] h-9 text-[14px] leading-5 text-center bg-[#A83836] hover:bg-red-600 text-white px-6 py-2 rounded-[9999px] transition-colors font-bold cursor-pointer"
                  >
                    Delete my account
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Submit */}
          <div className="flex items-center justify-end gap-3 mt-6 py-8 border border-[#A9B4B21A]">
            <button
              type="button"
              className="w-[192.55px] h-12 text-[14px] md:text-[16px] font-bold text-[#56615F] hover:text-gray-800 px-7 py-3 border border-gray-200 hover:bg-gray-50 transition-colors flex items-center justify-center leading-6 cursor-pointer"
            >
              Discard changes
            </button>
            <button
              type="submit"
              className="w-[212.89px] h-12 bg-[#1D6A63] hover:bg-[#075D57] px-10 py-3 rounded-[9999px] transition-colors font-bold text-white text-[14px] md:text-[16px] leading-6 cursor-pointer flex items-center justify-center"
            >
              Save All Changes
            </button>
          </div>
        </form>

        {/* Footer Actions */}
        <div className="mt-10 max-w-252 mx-auto px-8 py-12 flex flex-col items-center justify-center gap-2">
          <p className="font-bold text-[12px] leading-4 tracking-[2.4px] uppercase text-[#56615F66] text-center my-5">
            The Digital Commons Ecosystem
          </p>
          <p className="font-normal text-[14px] leading-5 tracking-[2.4px] uppercase text-[#56615F66] text-center">
            © {new Date().getFullYear()} The Commons. All rights reserved.
            Privacy Policy • Terms of Service.
          </p>
        </div>
      </div>

      {/* Delete Confirm Modal */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-xl">
            <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mb-4">
              <FiAlertTriangle size={18} className="text-red-500" />
            </div>
            <h3 className="text-base font-semibold text-gray-900 mb-1">
              Delete your account?
            </h3>
            <p className="text-sm text-gray-500 mb-5">
              This will permanently remove all your data. This cannot be undone.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowDeleteConfirm(false)}
                className="flex-1 text-sm border border-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button className="flex-1 text-sm bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors font-medium">
                Yes, delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default AccountSettings;
