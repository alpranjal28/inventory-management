"use client";
import React, { useState } from "react";
import Header from "../(components)/Header";

type UserSettingsProps = {
  label: string;
  value: string | boolean;
  type: "text" | "toggle";
};

const mockUserSettings: UserSettingsProps[] = [
  {
    label: "Username",
    value: "John Doe",
    type: "text",
  },
  {
    label: "Email",
    value: "john.doe@example.com",
    type: "text",
  },
  {
    label: "Age",
    value: "30",
    type: "text",
  },
  {
    label: "Notification",
    value: true,
    type: "toggle",
  },
  {
    label: "darkTheme",
    value: false,
    type: "toggle",
  },
  {
    label: "Language",
    value: "en",
    type: "text",
  },
];

const Settings = () => {
  const [userSettings, setUserSettings] =
    useState<UserSettingsProps[]>(mockUserSettings);

  const handleToggleChange = (index: number) => {
    const settingsCopy = [...userSettings];
    settingsCopy[index].value = !settingsCopy[index].value as boolean;
    setUserSettings(settingsCopy);
  };

  return (
    <div className="min-w-full">
      <Header name="User Settings" />
      <div className="overflow-x-auto mt-5 shadow-md">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="text-left py-3 px-4 uppercase text-sm font-semibold">
                Setting
              </th>
              <th className="text-left py-3 px-4 uppercase text-sm font-semibold">
                Value
              </th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {userSettings.map((setting, index) => (
              <tr className="hover:bg-blue-50">
                <td className="py-3 px-4">{setting.label}</td>
                <td className="py-3 px-4">
                  {setting.type === "toggle" ? (
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={setting.value as boolean}
                        onChange={() => handleToggleChange(index)}
                        className="sr-only peer"
                      />
                      <div
                        className="w-11 h-6 bg-gray-200 rounded-full peer 
												peer-focus:ring-blue-400 peer-focus:ring-4 transition 
												peer-checked:after:translate-x-full peer-checked:after:border-white 
												after:content-[''] after:absolute after:top-[2px] after:bg-white 
												after:border-gray-300 after:border after:rounded-full after:h-5 
												after:w-5 after:transition-all peer-checked:bg-blue-600"
                      ></div>
                    </label>
                  ) : (
                    <input
                      type="text"
                      className="px-4 py-2 border rounded-lg text-gray-500 focus:outline-none focus:border-blue-500"
                      value={setting.value as string}
                      onChange={(e) => {
                        const settingsCopy = [...userSettings];
                        settingsCopy[index].value = e.target.value;
                        setUserSettings(settingsCopy);
                      }}
                    />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Settings;
