package com.winlator.cmod.core;

import android.content.Context;

public abstract class GPUInformation {

    public static boolean isAdrenoGPU(Context context) {
        String renderer = getRenderer(null, context);
        return renderer != null && renderer.toLowerCase().contains("adreno");
    }

    public static boolean isPowerVRGPU(Context context) {
        String renderer = getRenderer(null, context);
        if (renderer == null) return false;
        renderer = renderer.toLowerCase();
        return renderer.contains("powervr") || renderer.contains("rogue")
                || renderer.contains("pvr") || renderer.contains("img")
                || renderer.contains("ge832") || renderer.contains("ge830");
    }

    public static boolean isDriverSupported(String driverName, Context context) {
        if (!isAdrenoGPU(context) && !driverName.equals("System"))
            return false;

        String renderer = getRenderer(driverName, context);

        return renderer != null && !renderer.toLowerCase().contains("unknown");
    }
    public native static String getVulkanVersion(String driverName, Context context);
    public native static int getVendorID(String driverName, Context context);
    public native static String getRenderer(String driverName, Context context);
    public native static String[] enumerateExtensions(String driverName, Context context);

    static {
        System.loadLibrary("winlator");
    }
}
